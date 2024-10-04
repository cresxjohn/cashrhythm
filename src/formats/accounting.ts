import accounting from 'accounting'

const formatMoney = (number: number | string) =>
  accounting.formatMoney(number, '₱')

export { formatMoney }
