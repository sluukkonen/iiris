import { isNil } from './isNil'

export const values = (obj) => (isNil(obj) ? [] : Object.values(obj))
