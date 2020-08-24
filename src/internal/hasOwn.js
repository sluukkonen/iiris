import { hasOwnProperty } from './builtins'

export const hasOwn = (object, key) => hasOwnProperty.call(object, key)
