import { sliceU } from './sliceU'
import { maxU } from './maxU'

export const dropU = (n, array) => sliceU(maxU(n, 0), array.length, array)
