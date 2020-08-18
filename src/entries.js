import { isNil } from './isNil'

export const entries = (obj) => (isNil(obj) ? [] : Object.entries(obj))
