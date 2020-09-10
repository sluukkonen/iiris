export const isObject = (value) => {
  const type = typeof value
  return (type === 'object' && value !== null) || type === 'function'
}
