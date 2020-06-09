export const colors = {
  PRIMARY: '#358ed7',
  SECONDARY: '#7dc855',
  SUCCESS: '#7dc855',
  INFO: '#39add1',
  WARNING: '#fafa61',
  DANGER: '#ff5322'
}

export function hexToRgb (hex, opacity) {
  let result
  hex = hex.replace('#', '')
  let r = parseInt(hex.substring(0, 2), 16)
  let g = parseInt(hex.substring(2, 4), 16)
  let b = parseInt(hex.substring(4, 6), 16)
  if (opacity) {
    result = `rgba(${r}, ${g}, ${b}, ${opacity})`
  } else {
    result = `rgb(${r}, ${g}, ${b})`
  }
  return result
}
