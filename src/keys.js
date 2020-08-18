import { isNil } from './isNil'

export const keys = (obj) => (isNil(obj) ? [] : Object.keys(obj))
