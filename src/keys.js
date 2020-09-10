import { objectKeys } from './internal/builtins'
import { isNil } from './isNil'

export const keys = (obj) => (isNil(obj) ? [] : objectKeys(obj))
