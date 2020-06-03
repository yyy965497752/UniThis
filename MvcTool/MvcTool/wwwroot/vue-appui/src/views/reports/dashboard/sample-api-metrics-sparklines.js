const chartLabels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]

const chartOptions = {
  scales: {
    xAxes: [
      {
        display: false
      }
    ],
    yAxes: [
      {
        display: false
      }
    ]
  }
}

const widgetData = [
  {
    metricData: {
      label: 'Yearly',
      value: 32600,
      delta: '+0.7%',
      deltaClass: 'success'
    },
    chartLabels: chartLabels,
    chartDatasets: [
      {
        label: 'Yearly',
        pointRadius: 0,
        data: [0, 1.06, 0, 0.99, 0, 0, 2.13, 0, 0, 1.98, 0, 0.99, 0, 0.99, 0, 0, 0, 1.98, 6.06, 0, 1.99, 0, 5.87, 1.98, 0.99]
      }
    ],
    chartOptions: chartOptions
  },
  {
    metricData: {
      label: 'Monthly',
      value: 4600,
      delta: '+2.3%',
      deltaClass: 'success'
    },
    chartLabels: chartLabels,
    chartDatasets: [
      {
        label: 'Monthly',
        pointRadius: 0,
        data: [0, 1, 0, 0, 1, 0, 2, 0, 1, 1, 0, 0, 2, 2, 0, 1, 0, 1, 0, 1, 1, 0, 0, 3]
      }
    ],
    chartOptions: chartOptions
  },
  {
    metricData: {
      label: 'Daily',
      value: 300,
      delta: '-0.4%',
      deltaClass: 'danger'
    },
    chartLabels: chartLabels,
    chartDatasets: [
      {
        label: 'Monthly',
        pointRadius: 0,
        data: [0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 2, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 3]
      }
    ],
    chartOptions: chartOptions
  },
  {
    metricData: {
      label: 'Hourly',
      value: 26,
      delta: '+0.2%',
      deltaClass: 'success'
    },
    chartLabels: chartLabels,
    chartDatasets: [
      {
        label: 'Monthly',
        pointRadius: 0,
        data: [0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 3, 1, 0, 2, 0]
      }
    ],
    chartOptions: chartOptions
  }
]

export default widgetData
