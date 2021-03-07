import { flip } from '../flip'

export const mapIndexedU = (fn, array) => array.map(flip(fn))
