import { builtinValues } from './internal/builtins'
import { isNil } from './isNil'

export const values = (obj) => (isNil(obj) ? [] : builtinValues(obj))
