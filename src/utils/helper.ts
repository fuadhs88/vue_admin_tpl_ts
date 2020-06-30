let strToUpperCase = function(value: string) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
}

const helper = {
  strToUpperCase: strToUpperCase
}
export default helper
