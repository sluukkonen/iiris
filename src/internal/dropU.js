import { maxU } from './maxU'
import { sliceU } from './sliceU'

export const dropU = (n, array) => sliceU(maxU(n, 0), array.length, array)
