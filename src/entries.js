import { objectEntries } from './internal/builtins'
import { isNil } from './isNil'

export const entries = (obj) => (isNil(obj) ? [] : objectEntries(obj))
