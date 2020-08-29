import { takeU } from './takeU'

export const dropLastU = (n, array) => takeU(array.length - n, array)
