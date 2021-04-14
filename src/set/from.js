import { builtinSet } from '../internal/builtins.js'

export const from = (iterable) => new builtinSet(iterable)
