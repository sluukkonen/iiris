import { unary } from '../unary'

export const filterU = (fn, array) => array.filter(unary(fn))
