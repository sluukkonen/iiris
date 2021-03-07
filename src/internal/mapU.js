import { unary } from '../unary'

export const mapU = (fn, array) => array.map(unary(fn))
