import { builtinDefineProperty } from './builtins'

export const setName =
  process.env.NODE_ENV === 'production'
    ? /* istanbul ignore next */ (fn) => fn
    : (fn, name) =>
        builtinDefineProperty(fn, 'name', { value: name, configurable: true })
