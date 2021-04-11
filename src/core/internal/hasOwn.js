import { builtinHasOwnProperty } from './builtins.js'

export const hasOwn = (object, key) => builtinHasOwnProperty.call(object, key)
