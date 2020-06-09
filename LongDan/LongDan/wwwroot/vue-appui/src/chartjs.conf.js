import Chart from 'chart.js'
import { colors, hexToRgb } from './theme.conf'

const CHART_BACKGROUND_COLOR = hexToRgb(colors.PRIMARY, 0.5)
const CHART_HOVER_BACKGROUND_COLOR = hexToRgb(colors.PRIMARY)
const CHART_BORDER_COLOR = hexToRgb(colors.PRIMARY, 0.5)

// Disable charts animation for better performance
Chart.defaults.global.animation.duration = 0

Chart.defaults.global.defaultBackgroundColor = CHART_BACKGROUND_COLOR
Chart.defaults.global.defaultBorderColor = CHART_BORDER_COLOR
Chart.defaults.global.defaultColor = CHART_BORDER_COLOR

Chart.defaults.global.defaultFontColor = '#43484d'
Chart.defaults.global.defaultFontFamily = 'Roboto'
Chart.defaults.global.defaultFontSize = 12

// Disable charts legend
Chart.defaults.global.legend.display = false

Chart.defaults.global.elements.arc.backgroundColor = CHART_BACKGROUND_COLOR
Chart.defaults.global.elements.arc.borderColor = CHART_BORDER_COLOR
Chart.defaults.global.elements.arc.borderWidth = 1

Chart.defaults.global.elements.line.backgroundColor = CHART_BACKGROUND_COLOR
Chart.defaults.global.elements.line.borderColor = CHART_HOVER_BACKGROUND_COLOR
Chart.defaults.global.elements.line.borderWidth = 2
// Disable fill for better performance
Chart.defaults.global.elements.line.fill = false
// Disable bezier curves for better performance
Chart.defaults.global.elements.line.tension = 0

Chart.defaults.global.elements.point.backgroundColor = CHART_BACKGROUND_COLOR
Chart.defaults.global.elements.point.borderColor = CHART_HOVER_BACKGROUND_COLOR
Chart.defaults.global.elements.point.borderWidth = 2
Chart.defaults.global.elements.point.hoverBorderWidth = 2

Chart.defaults.global.elements.rectangle.backgroundColor = CHART_BACKGROUND_COLOR
Chart.defaults.global.elements.rectangle.hoverBackgroundColor = CHART_HOVER_BACKGROUND_COLOR
Chart.defaults.global.elements.rectangle.borderColor = CHART_BORDER_COLOR
Chart.defaults.global.elements.rectangle.borderWidth = 1

Chart.defaults.global.tooltips.animation = false

export default Chart
