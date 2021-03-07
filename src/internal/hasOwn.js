import { builtinHasOwnProperty } from './builtins'

export const hasOwn = (object, key) => builtinHasOwnProperty.call(object, key)
