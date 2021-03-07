import { binary } from '../binary'

export const reduceU = (fn, initial, array) => array.reduce(binary(fn), initial)
