import { unary } from '../unary'

export const findU = (fn, array) => array.find(unary(fn))
