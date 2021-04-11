import { takeU } from './takeU.js'

export const dropLastU = (n, array) => takeU(array.length - n, array)
