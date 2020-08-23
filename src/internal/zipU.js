import { pairU } from './pairU'
import { zipWithU } from './zipWithU'

export const zipU = (array1, array2) => zipWithU(pairU, array1, array2)
