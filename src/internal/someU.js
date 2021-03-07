import { unary } from '../unary'

export const someU = (fn, array) => array.some(unary(fn))
