import { builtinEntries } from './internal/builtins'
import { isNil } from './isNil'

export const entries = (obj) => (isNil(obj) ? [] : builtinEntries(obj))
