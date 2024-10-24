document.addEventListener('DOMContentLoaded', function () {
  // changeValueOnUpClick();
  // changeValueOnDownClick();
  setupMonitoringButton();
});
let booleanFlag = false;
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
// let minpapvalue = 60;
let mincvpvalue = 2;
let minpapvalue = 15;
let minetco2value = 35;
let minrrvalue = 12;

// set booleanFlag value as true after 10sec
setTimeout(() => {
  booleanFlag = true;
}, 10000);

function printbpInputValue(event) {
  // Store the new value from the input field
  bpvalue = event.target.value;
  bpvalue = event.target.value;
  if(bpvalue>110){
    minbpvalue = 90;
  }if(bpvalue<90){
    minbpvalue = 0;
  }
  // minbpvalue = 0;
  document.getElementById('bpinputvalue').value = "";
  console.log(" Value: " + (bpvalue));
  console.log("minbpvalue" + minbpvalue)
  
}
function printspo2InputValue(event) {
  // Store the new value from the input field
  spo2value = event.target.value;
  // minspo2value = 0;
  if(spo2value>100){
    minspo2value = 95;
  }if(spo2value<95){
    minspo2value = 60;
  }
  document.getElementById('spo2inputvalue').value = "";
  console.log(" Value: " + (spo2value));
  console.log("minspo2value"+minspo2value);
  
}
function printpulseInputValue(event) {
  // Store the new value from the input field
  pulsevalue = event.target.value;
  // minpulsevalue = 0;
  if(pulsevalue>100){
    minpulsevalue = 90;
  }if(pulsevalue<70){
    minbpvalue = 0;
  }
  document.getElementById('pulseinputvalue').value = "";
  console.log(" Value: " + (pulsevalue));
  console.log("minpulsevalue" + minpulsevalue)
  
}
function printcvpInputValue(event) {
  // Store the new value from the input field
  cvpvalue = event.target.value;
  if(cvpvalue>10){
    mincvpvalue = 8;
  }if(cvpvalue<5){
    mincvpvalue = 0;
  }
  // mincvpvalue = 0;
  document.getElementById('cvpinputvalue').value = "";
  console.log(" Value: " + (cvpvalue));
  console.log("mincvpvalue" + mincvpvalue);
  
}
function printpapInputValue(event) {
  // Store the new value from the input field
  papvalue = event.target.value;
  if(papvalue>30){
    minpapvalue = 15;
  }if(papvalue<15){
    minpapvalue = 0;
  }
  // minpapvalue = 0;
  document.getElementById('papinputvalue').value = "";
  console.log(" Value: " + (papvalue));
  console.log("minpapvalue "+minpapvalue);
  
}
function printetco2InputValue(event) {
  // Store the new value from the input field
  etco2value = event.target.value;
  if(etco2value>45){
    minetco2value = 25;
  }if(etco2value<25){
    // minetco2value = 0;
  }
  // minetco2value = 0;
  document.getElementById('etco2inputvalue').value = "";
  console.log(" Value: " + (etco2value));
  console.log("minetco2value" +  minetco2value);
  
}
function printrrInputValue(event) {
  // Store the new value from the input field
  rrvalue = event.target.value;
  if(rrvalue>16){
    minrrvalue = 10;
  }if(rrvalue<10){
    minrrvalue = 0;
  }
  // minrrvalue = 0;
  document.getElementById('rrinputvalue').value = "";
  console.log(" Value: " + (rrvalue));
  console.log("minrrvalue" +  minrrvalue)
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
    plugins: {
      legend: { display: false },
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
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        title: {
          display: false,
          text: '',
        },
        min: 50,
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
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        title: {
          display: false,
          text: '',
        },
        min: 50,
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
    plugins: {
      legend: { display: false },
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
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        title: {
          display: false,
          text: '',
        },
        min: 10,
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
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        title: {
          display: false,
          text: '',
        },
        min: 20,
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
    scales: {
      y: {
        title: {
          display: false,
          text: '',
        },
        min: 5,
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

// Function to update charts based on the disease condition
function updateChart(flag) {
  // switch (disease_cond) {
  //   case 'normal':
  //     systolicBP = generateDiseaseCondValue(90, systolicBP);
  //     // diastolicBP = generateDiseaseCondValue(60, 80);
  //     break;

  //   case 'hypertension':
  //     systolicBP = generateDiseaseCondValue(90, 120);
  //     diastolicBP = generateDiseaseCondValue(60, 80);
  //     break;

  //   case 'diabetes':
  //     systolicBP = generateDiseaseCondValue(130, 140);
  //     diastolicBP = generateDiseaseCondValue(80, 90);
  //     break;

  //   case 'asthma':
  //     systolicBP = generateDiseaseCondValue(110, 130);
  //     diastolicBP = generateDiseaseCondValue(70, 90);
  //     break;

  //   case 'cardiac_arrest':
  //     systolicBP = 0; // Cardiac arrest
  //     diastolicBP = 0;
  //     break;

  //   case 'pneumonia':
  //     systolicBP = generateDiseaseCondValue(90, 120);
  //     diastolicBP = generateDiseaseCondValue(60, 80);
  //     break;

  //   case 'neuraxial':
  //     systolicBP = generateDiseaseCondValue(70, 90);
  //     diastolicBP = generateDiseaseCondValue(40, 60);
  //     break;

  //   case 'laryngospasm':
  //     systolicBP = generateDiseaseCondValue(140, 180);
  //     diastolicBP = generateDiseaseCondValue(90, 100);
  //     break;

  //   case 'ga':
  //     systolicBP = generateDiseaseCondValue(90, 120);
  //     diastolicBP = generateDiseaseCondValue(50, 70);
  //     break;

  //   case 'high_neuraxial':
  //     systolicBP = generateDiseaseCondValue(70, 90);
  //     diastolicBP = generateDiseaseCondValue(40, 60);
  //     break;

  //   case 'ga_induction':
  //     systolicBP = generateDiseaseCondValue(90, 110);
  //     diastolicBP = generateDiseaseCondValue(50, 70);
  //     break;

  //   case 'emergence':
  //     systolicBP = generateDiseaseCondValue(90, 160);
  //     diastolicBP = generateDiseaseCondValue(60, 100);
  //     break;

  //   case 'hypotension':
  //     systolicBP = generateDiseaseCondValue(70, 90);
  //     diastolicBP = generateDiseaseCondValue(40, 60);
  //     break;

  //   case 'neonatal_resuscitation':
  //     systolicBP = generateDiseaseCondValue(60, 90);
  //     diastolicBP = generateDiseaseCondValue(30, 60);
  //     break;

  //   default:
  //     systolicBP = 120;
  //     diastolicBP = 90;
  //     break;
  // }


  // Update the data for BP Chart
  // systolicBP = generateDiseaseCondValue(90, systolicBP);
  let bpValue; 
  if (flag === true) {
    bpValue = generateDiseaseCondValue(0, 0); 
  } else {
    bpValue = generateDiseaseCondValue(minbpvalue, bpvalue);
  }
  bpChart.data.labels.push(''); // Add new time label
  bpChart.data.datasets[0].data.push(bpValue); // Add new systolic BP

  if (bpChart.data.labels.length > 10) {
    bpChart.data.labels.shift(); // Remove the oldest time label
    bpChart.data.datasets[0].data.shift(); // Remove the oldest BP value
  }
  bpChart.update();

  // Update the data for SPO2 Chart (For demonstration, let's use random values)
  let spo2Value = generateDiseaseCondValue(minspo2value, spo2value); // Example for Spo2

  spo2Chart.data.labels.push(''); // Add new time label
  spo2Chart.data.datasets[0].data.push(spo2Value); // Add new SPO2 value

  if (spo2Chart.data.labels.length > 10) {
    spo2Chart.data.labels.shift(); // Remove the oldest time label
    spo2Chart.data.datasets[0].data.shift(); // Remove the oldest SPO2 value
  }

  // Update the SPO2 chart
  spo2Chart.update();

  let pulseValue = generateDiseaseCondValue(minpulsevalue,pulsevalue);
  pulseChart.data.labels.push('');
  pulseChart.data.datasets[0].data.push(pulseValue); // Add new SPO2 value

  if (pulseChart.data.labels.length > 10) {
    pulseChart.data.labels.shift(); // Remove the oldest time label
    pulseChart.data.datasets[0].data.shift(); // Remove the oldest SPO2 value
  }

  // Update the SPO2 chart
  pulseChart.update();

  let cvpValue = generateDiseaseCondValue(mincvpvalue,cvpvalue);
  cvpChart.data.labels.push('');
  cvpChart.data.datasets[0].data.push(cvpValue); // Add new SPO2 value

  if (cvpChart.data.labels.length > 10) {
    cvpChart.data.labels.shift(); // Remove the oldest time label
    cvpChart.data.datasets[0].data.shift(); // Remove the oldest SPO2 value
  }

  // Update the SPO2 chart
  cvpChart.update();

  let papValue = generateDiseaseCondValue(minpapvalue,papvalue);
  papChart.data.labels.push('');
  papChart.data.datasets[0].data.push(papValue); // Add new SPO2 value

  if (papChart.data.labels.length > 10) {
    papChart.data.labels.shift(); // Remove the oldest time label
    papChart.data.datasets[0].data.shift(); // Remove the oldest SPO2 value
  }

  // Update the SPO2 chart
  papChart.update();

  let etco2Value = generateDiseaseCondValue(minetco2value,etco2value);
  etco2Chart.data.labels.push('');
  etco2Chart.data.datasets[0].data.push(etco2Value); // Add new SPO2 value

  if (etco2Chart.data.labels.length > 10) {
    etco2Chart.data.labels.shift(); // Remove the oldest time label
    etco2Chart.data.datasets[0].data.shift(); // Remove the oldest SPO2 value
  }

  // Update the SPO2 chart
  etco2Chart.update();

  let rrValue = generateDiseaseCondValue(minrrvalue,rrvalue);
  rrChart.data.labels.push('');
  rrChart.data.datasets[0].data.push(rrValue); // Add new SPO2 value

  if (rrChart.data.labels.length > 10) {
    rrChart.data.labels.shift(); // Remove the oldest time label
    rrChart.data.datasets[0].data.shift(); // Remove the oldest SPO2 value
  }

  // Update the SPO2 chart
  rrChart.update();

  document.getElementById('bpvalue').innerText = bpValue;
  document.getElementById('spo2value').innerText = spo2Value;
  document.getElementById('pulsevalue').innerText = pulseValue;
  document.getElementById('cvpvalue').innerText = cvpValue;
  document.getElementById('papvalue').innerText = papValue;
  document.getElementById('etco2value').innerText = etco2Value;
  document.getElementById('rrvalue').innerText = rrValue;

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

function runAllChains() {
  // Check the boolean flag before updating the chart
  if (booleanFlag) {
    updateChart(true);
    setTimeout(() => {
      booleanFlag = false; // Reset the flag after 6 seconds
    }, 10000);
  } else {
    updateChart(false);
  }
}
function startMonitoring(){
 // Run the function every second
setInterval(function () {
  runAllChains();
}, 1500);
}

// Set an interval to update charts
// const timeId = setTimeout(() => {
//   booleanFlag = true;
// }, 5000);