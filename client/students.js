
document.addEventListener('DOMContentLoaded', function () {
    showingStudentsGraphs();
  });
  
  const configBp_chart = {
    type: 'line',
    data: {
      labels: Array(50).fill(''), // Time or Data Points
      datasets: [
        {
          label: 'Blood Pressure',
          data: Array(50).fill(0),
          borderColor: 'rgb(75, 192, 192)',
          tension: 1,
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
          min: 50,
          max: 150,
        },
      },
      tooltips: { display: false },
    },
  };
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
  };
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
          min: 10,
          max: 50,
        },
      },
      tooltips: { display: false },
    },
  };
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
          min: 20,
          max: 60,
        },
      },
      tooltips: { display: false },
    },
  };
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
          min: 5,
          max: 30,
        },
      },
      tooltips: { display: false },
    },
  }

  let bpChart = null;
  let spo2Chart = null;
  let pulseChart = null;
  let cvpChart = null;
  let papChart = null;
  let etco2Chart = null;
  let rrChart = null;
  let data = {}; // Store data from EventSource here
  
  const eventSource = new EventSource('https://one-simulation-backend.onrender.com/transferData');
  
  // Handle incoming data
  eventSource.onmessage = (event) => {
    data = JSON.parse(event.data); // Parse the JSON data
    console.log('Received data:', data);
    if (bpChart) {
      updateChartValue(data);
    }
  };
  
  eventSource.onerror = (error) => {
    console.error('Error in EventSource:', error);
  };
  
  // Create the BP chart after DOM is loaded
  function initializeCharts() {
    const bpCtx = document.getElementById('bp_chart')?.getContext('2d');
    const spo2Ctx = document.getElementById('spo2Graph')?.getContext('2d');
    const pulseCtx =  document.getElementById('pulseGraph')?.getContext('2d');
    const cvpCtx = document.getElementById('cvpGraph')?.getContext('2d');
    const papCtx = document.getElementById('papGraph')?.getContext('2d');
    const etco2Ctx = document.getElementById('etco2Graph')?.getContext('2d');
    const rrCtx = document.getElementById('rrGraph')?.getContext('2d');

    if (bpCtx) {
      bpChart = new Chart(bpCtx, configBp_chart);
    }
    if(spo2Ctx) {
        spo2Chart = new Chart(spo2Ctx, configSpo2_chart);
    }
    if(pulseCtx){
        pulseChart = new Chart(pulseCtx, configPulse_chart)
    }
    if(cvpCtx){
        cvpChart = new Chart(cvpCtx, configCvp_chart)
    }
    if(papCtx){
        papChart = new Chart(papCtx, configPap_chart)
    }
    if(etco2Ctx){
        etco2Chart = new Chart(etco2Ctx, configEtco2_chart)
    }
    if(rrCtx){
        rrChart = new Chart(rrCtx, configRr_chart)
    }
  }
  
  // Update chart data dynamically
  function updateChartValue(data) {
    if (!data || !data.bpvalue < 0) return; // Ensure data is available
  
    document.getElementById('bpvalue').innerText = `${data.bpvalue}`;
  
    bpChart.data.labels.push(''); // Add new time label
    bpChart.data.datasets[0].data.push(data.bpvalue); // Add new systolic BP
  
    if (bpChart.data.labels.length > 50) {
      bpChart.data.labels.shift(); // Remove the oldest time label
      bpChart.data.datasets[0].data.shift(); // Remove the oldest BP value
    }
  
    // Update the chart
    bpChart.update();


    if (!data || !data.spo2value< 0 ) return; // Ensure data is available
  
    document.getElementById('spo2Value').innerText = `${data.spo2value}`;
  
    spo2Chart.data.labels.push(''); // Add new time label
    spo2Chart.data.datasets[0].data.push(data.spo2value); // Add new systolic BP
  
    if (spo2Chart.data.labels.length > 50) {
        spo2Chart.data.labels.shift(); // Remove the oldest time label
        spo2Chart.data.datasets[0].data.shift(); // Remove the oldest BP value
    }
  
    // Update the chart
    spo2Chart.update();

    if (!data || !data.pulsevalue < 0) return; // Ensure data is available
  
    document.getElementById('pulseValue').innerText = `${data.pulsevalue}`;
  
    pulseChart.data.labels.push(''); // Add new time label
    pulseChart.data.datasets[0].data.push(data.pulsevalue); // Add new systolic BP
  
    if (pulseChart.data.labels.length > 50) {
        pulseChart.data.labels.shift(); // Remove the oldest time label
        pulseChart.data.datasets[0].data.shift(); // Remove the oldest BP value
    }
  
    // Update the chart
    pulseChart.update();


    if (!data || !data.cvpvalue < 0) return; // Ensure data is available
  
    document.getElementById('cvpValue').innerText = `${data.cvpvalue}`;
  
    cvpChart.data.labels.push(''); // Add new time label
    cvpChart.data.datasets[0].data.push(data.cvpvalue); // Add new systolic BP
  
    if (cvpChart.data.labels.length > 50) {
        cvpChart.data.labels.shift(); // Remove the oldest time label
        cvpChart.data.datasets[0].data.shift(); // Remove the oldest BP value
    }
  
    // Update the chart
    cvpChart.update();

    if (!data || !data.papvalue < 0) return; // Ensure data is available
  
    document.getElementById('papValue').innerText = `${data.papvalue}`;
  
    papChart.data.labels.push(''); // Add new time label
    papChart.data.datasets[0].data.push(data.papvalue); // Add new systolic BP
  
    if (papChart.data.labels.length > 50) {
        papChart.data.labels.shift(); // Remove the oldest time label
        papChart.data.datasets[0].data.shift(); // Remove the oldest BP value
    }
  
    // Update the chart
    papChart.update();

    if (!data || !data.etco2value < 0) return; // Ensure data is available
  
    document.getElementById('etco2Value').innerText = `${data.etco2value}`;
  
    etco2Chart.data.labels.push(''); // Add new time label
    etco2Chart.data.datasets[0].data.push(data.etco2value); // Add new systolic BP
  
    if (etco2Chart.data.labels.length > 50) {
        etco2Chart.data.labels.shift(); // Remove the oldest time label
        etco2Chart.data.datasets[0].data.shift(); // Remove the oldest BP value
    }
  
    // Update the chart
    etco2Chart.update();


    if (!data || !data.rrvalue < 0) return; // Ensure data is available
  
    document.getElementById('rrValue').innerText = `${data.rrvalue}`;
  
    rrChart.data.labels.push(''); // Add new time label
    rrChart.data.datasets[0].data.push(data.rrvalue); // Add new systolic BP
  
    if (rrChart.data.labels.length > 50) {
        rrChart.data.labels.shift(); // Remove the oldest time label
        rrChart.data.datasets[0].data.shift(); // Remove the oldest BP value
    }
  
    // Update the chart
    rrChart.update();

  }
  
  function showingStudentsGraphs() {
    initializeCharts(); // Initialize the chart on page load
    setInterval(() => {
      if (data && data.bpvalue) {
        updateChartValue(data);
      }
    }, 2000);
  }
  