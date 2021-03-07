import { unary } from '../unary'

export const everyU = (fn, array) => array.every(unary(fn))
