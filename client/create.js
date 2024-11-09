document.addEventListener('DOMContentLoaded', function () {

  setupMonitoringButton();
});

var disease_cond = 'normal';
let bpvalue = 120;
let spo2value = 100;
let pulsevalue = 100;
let cvpvalue = 5;
let papvalue = 23;
let etco2value = 40;
let rrvalue = 16;
let minbpvalue = 90;
let minspo2value = 95;
let minpulsevalue = 60;
let mincvpvalue = 2;
let minpapvalue = 15;
let minetco2value = 35;
let minrrvalue = 12;

const beepSound = new Audio('/client/beep.mp3');

function playBeep() {
  beepSound.play();
}

function printbpInputValue(event) {
  // Store the new value from the input field
  bpvalue = event.target.value;
  if(bpvalue>100){
    minbpvalue = 90;
  }
  minbpvalue = 0;
  document.getElementById('bpinputvalue').value = "";
  console.log(" Value: " + (bpvalue));
  
}
function printspo2InputValue(event) {
  // Store the new value from the input field
  spo2value = event.target.value;
  minspo2value = 0;
  document.getElementById('spo2inputvalue').value = "";
  console.log(" Value: " + (spo2value));
  
}
function printpulseInputValue(event) {
  // Store the new value from the input field
  pulsevalue = event.target.value;
  minpulsevalue = 0;
  document.getElementById('pulseinputvalue').value = "";
  console.log(" Value: " + (pulsevalue));
  
}
function printcvpInputValue(event) {
  // Store the new value from the input field
  cvpvalue = event.target.value;
  mincvpvalue = 0;
  document.getElementById('cvpinputvalue').value = "";
  console.log(" Value: " + (cvpvalue));
  
}
function printpapInputValue(event) {
  // Store the new value from the input field
  papvalue = event.target.value;
  minpapvalue = 0;
  document.getElementById('papinputvalue').value = "";
  console.log(" Value: " + (papvalue));
  
}
function printetco2InputValue(event) {
  // Store the new value from the input field
  etco2value = event.target.value;
  minetco2value = 0;
  document.getElementById('etco2inputvalue').value = "";
  console.log(" Value: " + (etco2value));
  
}
function printrrInputValue(event) {
  // Store the new value from the input field
  rrvalue = event.target.value;
  minrrvalue = 0;
  document.getElementById('rrinputvalue').value = "";
  console.log(" Value: " + (rrvalue)); 
}

  
function setupMonitoringButton(){
  document.getElementById('teachers-section')?.addEventListener('click', () => {
    window.location.href = 'login.html';
});

document.getElementById('students-section')?.addEventListener('click', () => {
    window.location.href = 'students.html';
});

document.getElementById('back')?.addEventListener('click', () => {
    localStorage.clear()
    window.location.href = "index.html"; // Redirect to the index.html page
});
}
document.getElementById('start-monitoring')?.addEventListener('click',startMonitoring)

// Create variable which holds Y-axis and X-axis values (min, max for graph)
const configBp_chart = {
  type: 'line',
  data: {
    labels: Array(50).fill(''), // Time or Data Points
    datasets: [
      {
        label: 'Blood Pressure',
        data: Array(50).fill(0),
        borderColor: 'rgb(75, 192, 192)',
        tension: 2,
        borderWidth: 2,
        lineTension: 0.25,
        pointRadius: 0,
        borderColor: 'red',
        fill: false,
      },
    ],
  },
  options: {
    responsive: true, // Enables responsiveness
    maintainAspectRatio: false, // Allows dynamic resizing
    plugins: {
      legend: { display: false },
    },
    animation: {
      duration: 300, // Faster animation
      easing: 'linear', // Smooth easing function
    },
    scales: {
      y: {
        title: {
          display: false,
          text: '',
        },
        min: 0,
        max: 150,
      },
    },
    tooltips: { display: false },
  },
};
const configSpo2_chart = {
  // Define the config for SPO2 chart similarly to BP chart
  type: 'line',
  data: {
    labels: Array(50).fill(''), // Time or Data Points
    datasets: [
      {
        label: 'Spo2',
        data: Array(50).fill(0),
        borderColor: 'rgb(255, 99, 132)',
        tension: 1,
        borderWidth: 2,
        lineTension: 0.25,
        pointRadius: 0,
        borderColor: 'blue',
        fill: false,
      },
    ],
  },
  options: {
    responsive: true, // Enables responsiveness
    maintainAspectRatio: false, // Allows dynamic resizing
    plugins: {
      legend: { display: false },
    },
    animation: {
      duration: 300, // Faster animation
      easing: 'linear', // Smooth easing function
    },
    scales: {
      y: {
        title: {
          display: false,
          text: '',
        },
        min: 0,
        max: 150,
      },
    },
    tooltips: { display: false },
  },
};

const configPulse_chart = {
  type: 'line',
  data: {
    labels: Array(50).fill(''), // Time or Data Points
    datasets: [
      {
        label: 'Spo2',
        data: Array(50).fill(0),
        borderColor: 'rgb(255, 99, 132)',
        tension: 1,
        borderWidth: 2,
        lineTension: 0.25,
        pointRadius: 0,
        borderColor: 'blue',
        fill: false,
      },
    ],
  },
  options: {
    responsive: true, // Enables responsiveness
    maintainAspectRatio: false, // Allows dynamic resizing
    plugins: {
      legend: { display: false },
    },
    animation: {
      duration: 300, // Faster animation
      easing: 'linear', // Smooth easing function
    },
    scales: {
      y: {
        title: {
          display: false,
          text: '',
        },
        min: 0,
        max: 150,
      },
    },
    tooltips: { display: false },
  },
}

const configCvp_chart = {
  type: 'line',
  data: {
    labels: Array(50).fill(''), // Time or Data Points
    datasets: [
      {
        label: 'Spo2',
        data: Array(50).fill(0),
        borderColor: 'rgb(255, 99, 132)',
        tension: 1,
        borderWidth: 2,
        lineTension: 0.25,
        pointRadius: 0,
        borderColor: 'orange',
        fill: false,
      },
    ],
  },
  options: {
    responsive: true, // Enables responsiveness
    maintainAspectRatio: false, // Allows dynamic resizing
    plugins: {
      legend: { display: false },
    },
    animation: {
      duration: 300, // Faster animation
      easing: 'linear', // Smooth easing function
    },
    scales: {
      y: {
        title: {
          display: false,
          text: '',
        },
        min: 0,
        max: 12,
      },
    },
    tooltips: { display: false },
  },
}

const configPap_chart = {
  type: 'line',
  data: {
    labels: Array(50).fill(''), // Time or Data Points
    datasets: [
      {
        label: 'Spo2',
        data: Array(50).fill(0),
        borderColor: 'rgb(255, 99, 132)',
        tension: 1,
        borderWidth: 2,
        lineTension: 0.25,
        pointRadius: 0,
        borderColor: 'orange',
        fill: false,
      },
    ],
  },
  options: {
    responsive: true, // Enables responsiveness
    maintainAspectRatio: false, // Allows dynamic resizing
    plugins: {
      legend: { display: false },
    },
    animation: {
      duration: 300, // Faster animation
      easing: 'linear', // Smooth easing function
    },
    scales: {
      y: {
        title: {
          display: false,
          text: '',
        },
        min: 0,
        max: 50,
      },
    },
    tooltips: { display: false },
  },
}

const configEtco2_chart = {
  type: 'line',
  data: {
    labels: Array(50).fill(''), // Time or Data Points
    datasets: [
      {
        label: 'Spo2',
        data: Array(50).fill(0),
        borderColor: 'rgb(255, 99, 132)',
        tension: 1,
        borderWidth: 2,
        lineTension: 0.25,
        pointRadius: 0,
        borderColor: 'aqua',
        fill: false,
      },
    ],
  },
  options: {
    responsive: true, // Enables responsiveness
    maintainAspectRatio: false, // Allows dynamic resizing
    plugins: {
      legend: { display: false },
    },
    animation: {
      duration: 300, // Faster animation
      easing: 'linear', // Smooth easing function
    },
    scales: {
      y: {
        title: {
          display: false,
          text: '',
        },
        min: 0,
        max: 60,
      },
    },
    tooltips: { display: false },
  },
}

const configRr_chart = {
  type: 'line',
  data: {
    labels: Array(50).fill(''), // Time or Data Points
    datasets: [
      {
        label: 'Spo2',
        data: Array(50).fill(0),
        borderColor: 'rgb(255, 99, 132)',
        tension: 1,
        borderWidth: 2,
        lineTension: 0.25,
        pointRadius: 0,
        borderColor: 'aqua',
        fill: false,
      },
    ],
  },
  options: {
    plugins: {
      legend: { display: false },
    },
    animation: {
      duration: 300, // Faster animation
      easing: 'linear', // Smooth easing function
    },
    scales: {
      y: {
        title: {
          display: false,
          text: '',
        },
        min: 0,
        max: 30,
      },
    },
    tooltips: { display: false },
  },
}

// Select all canvas elements within the .graphs container
const canvasElements = document.querySelectorAll("canvas");

// Create separate chart instances for BP and SPO2 charts
const bpChart = new Chart(document.getElementById("bp_chart").getContext("2d"), configBp_chart);
const spo2Chart = new Chart(document.getElementById("spo2_chart").getContext("2d"), configSpo2_chart);
const pulseChart = new Chart(document.getElementById("pulse_chart").getContext("2d"), configPulse_chart);
const cvpChart = new Chart(document.getElementById("cvp_chart").getContext("2d"), configCvp_chart);
const papChart = new Chart(document.getElementById("pap_chart").getContext("2d"), configPap_chart);
const etco2Chart = new Chart(document.getElementById("etco2_chart").getContext("2d"), configEtco2_chart);
const rrChart = new Chart(document.getElementById("rr_chart").getContext("2d"), configRr_chart);

// Function to generate random BP values between 12 and 20
function generateDiseaseCondValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



let isMonitoring = false; // Flag to track if monitoring is active
let isStopped = false; 

function startMonitoring() {
  isMonitoring = true; // Set monitoring to true
  updateChart(); // Call the updateChart function immediately
  setInterval(updateChart, 1500); // Start the update interval
}

// Check the server for stop command
function checkForStopCommand() {
  fetch('http://localhost:4000/arduino-data')
    .then(response => response.json())
    .then(data => {
      if (data.command === 'STOP') {
        isStopped = true;
        resetChartsToZero();
        setTimeout(() => {
          isStopped = false; // Resume normal updates after 10 seconds
        }, 10000);
      }
    })
    .catch(error => console.error('Error checking for stop command:', error));
}

// Reset chart values to zero
function resetChartsToZero() {
  bpChart.data.datasets[0].data = Array(50).fill(0);
  spo2Chart.data.datasets[0].data = Array(50).fill(0);
  pulseChart.data.datasets[0].data = Array(50).fill(0);
  cvpChart.data.datasets[0].data = Array(50).fill(0);
  papChart.data.datasets[0].data = Array(50).fill(0);
  etco2Chart.data.datasets[0].data = Array(50).fill(0);
  rrChart.data.datasets[0].data = Array(50).fill(0);

  bpChart.update();
  spo2Chart.update();
  pulseChart.update();
  cvpChart.update();
  papChart.update();
  etco2Chart.update();
  rrChart.update();

    // Update display values on the page
    document.getElementById('bpvalue').innerText = 0;
    document.getElementById('spo2value').innerText = 0;
    document.getElementById('pulsevalue').innerText = 0;
    document.getElementById('cvpvalue').innerText = 0;
    document.getElementById('papvalue').innerText = 0;
    document.getElementById('etco2value').innerText = 0;
    document.getElementById('rrvalue').innerText = 0;
}
// Function to update charts based on the disease condition
function updateChart() {
  if (!isMonitoring || isStopped) return; // Skip updating if stopped

  let bpValue = generateDiseaseCondValue(minbpvalue, bpvalue);
  let spo2Value = generateDiseaseCondValue(minspo2value, spo2value);
  let pulseValue = generateDiseaseCondValue(minpulsevalue, pulsevalue);
  let cvpValue = generateDiseaseCondValue(mincvpvalue, cvpvalue);
  let papValue = generateDiseaseCondValue(minpapvalue, papvalue);
  let etco2Value = generateDiseaseCondValue(minetco2value, etco2value);
  let rrValue = generateDiseaseCondValue(minrrvalue, rrvalue);

  // Update each chart with the new values
  bpChart.data.datasets[0].data.push(bpValue);
  spo2Chart.data.datasets[0].data.push(spo2Value);
  pulseChart.data.datasets[0].data.push(pulseValue);
  cvpChart.data.datasets[0].data.push(cvpValue);
  papChart.data.datasets[0].data.push(papValue);
  etco2Chart.data.datasets[0].data.push(etco2Value);
  rrChart.data.datasets[0].data.push(rrValue);

  // Trim data to keep only 50 values
  if (bpChart.data.datasets[0].data.length > 50) bpChart.data.datasets[0].data.shift();
  if (spo2Chart.data.datasets[0].data.length > 50) spo2Chart.data.datasets[0].data.shift();
  if (pulseChart.data.datasets[0].data.length > 50) pulseChart.data.datasets[0].data.shift();
  if (cvpChart.data.datasets[0].data.length > 50) cvpChart.data.datasets[0].data.shift();
  if (papChart.data.datasets[0].data.length > 50) papChart.data.datasets[0].data.shift();
  if (etco2Chart.data.datasets[0].data.length > 50) etco2Chart.data.datasets[0].data.shift();
  if (rrChart.data.datasets[0].data.length > 50) rrChart.data.datasets[0].data.shift();

  bpChart.update();
  spo2Chart.update();
  pulseChart.update();
  cvpChart.update();
  papChart.update();
  etco2Chart.update();
  rrChart.update();

  // Update display values on the page
  document.getElementById('bpvalue').innerText = bpValue;
  document.getElementById('spo2value').innerText = spo2Value;
  document.getElementById('pulsevalue').innerText = pulseValue;
  document.getElementById('cvpvalue').innerText = cvpValue;
  document.getElementById('papvalue').innerText = papValue;
  document.getElementById('etco2value').innerText = etco2Value;
  document.getElementById('rrvalue').innerText = rrValue;
  playBeep();

  const simulatedData = {
    bpvalue: bpValue,
    spo2value: spo2Value,
    pulsevalue: pulseValue,
    cvpvalue: cvpValue,
    papvalue: papValue,
    etco2value: etco2Value,
    rrvalue: rrValue,

  }

  fetch('http://localhost:4000/teacher-graph-data', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(simulatedData)
})
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(result => console.log('Data successfully sent to server', result))
.catch(error => console.error('Error sending data:', error));
console.log("simulated Data in create: ",simulatedData);
}


setInterval(checkForStopCommand, 2000);

// Run updateChart every 1.5 seconds if not stopped
setInterval(updateChart, 600);
