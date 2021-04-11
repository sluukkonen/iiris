import { dropU } from './dropU.js'

export const takeLastU = (n, array) => dropU(array.length - n, array)
