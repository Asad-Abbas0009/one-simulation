from flask import Flask, Response, send_file, request, jsonify
import time
from threading import Event, Lock

app = Flask(__name__)

# Event to control when to start streaming
start_streaming_event = Event()

# Lock for thread-safe access to shared data
data_lock = Lock()

# Dictionary to hold the latest values
latest_data = {
    "bp_systolic": 120,
    "bp_diastolic": 80,
    "spo2": 98,
    "pulse_rate": 70,
    "cvp": 8,
    "pap_systolic": 25,
    "pap_diastolic": 10,
    "etco2": 35,
    "rr": 16
}

# Serve the main HTML files (students.html, teachers.html)
@app.route('/')
def serve_students():
    return send_file('students.html')

@app.route('/teachers')
def serve_teachers():
    return send_file('teachers.html')

# Serve JavaScript and CSS files
@app.route('/script.js')
def serve_script():
    return send_file('script.js')

@app.route('/styles.css')
def serve_styles():
    return send_file('styles.css')

# Route to start monitoring (triggered by the Start Monitoring button)
@app.route('/start-monitoring', methods=['POST'])
def start_monitoring():
    start_streaming_event.set()  # Set the event to allow streaming
    print("Monitoring started.")  # Log to confirm monitoring has started
    return '', 200

# Route to update data from the teacher's section
@app.route('/update-teacher-data', methods=['POST'])
def update_teacher_data():
    global latest_data
    data = request.json

    # Log the received data from the teacher's section
    print("Received data from teacher:", data)

    with data_lock:
        # Update the latest data with the values received from the teacher
        latest_data.update({
            "bp_systolic": data.get("bp_systolic", latest_data["bp_systolic"]),
            "bp_diastolic": data.get("bp_diastolic", latest_data["bp_diastolic"]),
            "spo2": data.get("spo2", latest_data["spo2"]),
            "pulse_rate": data.get("pulse_rate", latest_data["pulse_rate"]),
            "cvp": data.get("cvp", latest_data["cvp"]),
            "pap_systolic": data.get("pap_systolic", latest_data["pap_systolic"]),
            "pap_diastolic": data.get("pap_diastolic", latest_data["pap_diastolic"]),
            "etco2": data.get("etco2", latest_data["etco2"]),
            "rr": data.get("rr", latest_data["rr"])
        })

    # Log the updated data to confirm
    print("Updated latest_data:", latest_data)

    return jsonify(success=True), 200

# SSE route to stream real-time data to students and teachers
@app.route('/sse')
def sse():
    def generate_data():
        while True:
            start_streaming_event.wait()  # Wait until monitoring starts

            with data_lock:
                # Use the latest values stored from the teacher
                data = latest_data.copy()

            # Log the data being sent in the SSE stream
            print("Streaming data to students:", data)

            # Format the data as JSON
            sse_data = f'data: {{"bp_systolic": {data["bp_systolic"]}, "bp_diastolic": {data["bp_diastolic"]}, "spo2": {data["spo2"]}, "pulse_rate": {data["pulse_rate"]}, "cvp": {data["cvp"]}, "pap_systolic": {data["pap_systolic"]}, "pap_diastolic": {data["pap_diastolic"]}, "etco2": {data["etco2"]}, "rr": {data["rr"]}}}\n\n'
            yield sse_data

            # Faster update: reduce delay to 500ms (0.5 seconds)
            time.sleep(0.1)

    return Response(generate_data(), mimetype='text/event-stream')

if __name__ == "__main__":
    app.run(debug=True)
