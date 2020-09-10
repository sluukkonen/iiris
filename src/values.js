import { objectValues } from './internal/builtins'
import { isNil } from './isNil'

export const values = (obj) => (isNil(obj) ? [] : objectValues(obj))
