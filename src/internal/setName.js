export const setName =
  process.env.NODE_ENV === 'production'
    ? /* istanbul ignore next */ (fn) => fn
    : (fn, name) =>
        Object.defineProperty(fn, 'name', { value: name, configurable: true })
