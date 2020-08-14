export const setName = (fn, name) =>
  Object.defineProperty(fn, 'name', { value: name, configurable: true })
