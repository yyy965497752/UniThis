import { colors } from '@/theme.conf'

const analytics = {
  labels: [27, 29, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25],
  datasets: [
    {
      label: 'Users',
      backgroundColor: 'transparent',
      borderDashOffset: 0.0,
      pointBackgroundColor: colors.PRIMARY,
      pointBorderColor: colors.PRIMARY,
      data: [0, 0, 19, 24, 21, 23, 12, 17, 26, 16, 18, 22, 18, 18, 17, 17, 23, 9, 24, 17, 9, 10, 9, 9, 8, 11, 8, 11, 2, 0]
    },
    {
      label: 'Purchases',
      backgroundColor: 'transparent',
      borderColor: colors.SUCCESS,
      borderDash: [2, 4],
      borderDashOffset: 0.0,
      pointBackgroundColor: colors.SUCCESS,
      pointBorderColor: colors.SUCCESS,
      data: [50, 37, 38, 38, 34, 24, 22, 29, 30, 24, 39, 32, 42, 23, 27, 25, 24, 26, 33, 43, 36, 29, 51, 22, 31, 21, 35, 29, 29, 17]
    }
  ],
  options: {
    gridLines: {
      display: false
    }
  },
  // Make sparklines in Chart.js
  sparklineCharts: {
    datasets: [
      {
        // If set to 0, the point is not rendered
        pointRadius: 0,
        data: [0, 0, 19, 24, 21, 23, 12]
      },
      {
        borderDash: [2, 4],
        borderDashOffset: 0.0,
        // If set to 0, the point is not rendered
        pointRadius: 0,
        data: [50, 37, 38, 38, 34, 24, 22]
      }
    ],
    options: {
      elements: {
        line: {
          fill: false
        }
      },
      scales: {
        xAxes: [
          {
            display: false
          }
        ],
        yAxes: [
          {
            display: false,
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  }
}

export default analytics
