export function round (number) {
  if (number >= 1000000) {
    return `${number / 1000000}M`
  } else if (number >= 1000) {
    return `${number / 1000}K`
  } else {
    return number
  }
}

export function displayPrice (currency, price) {
  return currencyToChar(currency) + price
}

function currencyToChar (currency) {
  switch (currency) {
    case 'USD':
      return '$'
    case 'EUR':
      return '€'
    case 'JPY':
      return '¥'
    case 'GBP':
      return '£'
    case 'CNY':
      return '元'
    case 'RUB':
      return '₽'
    case 'INR':
      return '₹'
    case 'BRL':
      return 'R$'
    default:
      return '¤'
  }
}
