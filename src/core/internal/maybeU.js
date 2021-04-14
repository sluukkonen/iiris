export const maybeU = (defaultValue, fn, value) =>
  value === undefined ? defaultValue : fn(value)
