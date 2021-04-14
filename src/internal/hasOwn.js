import { builtinHasOwnProperty } from './builtins.js'

export const hasOwn = (key, object) => builtinHasOwnProperty.call(object, key)
