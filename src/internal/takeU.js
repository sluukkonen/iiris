import { maxU } from './maxU'
import { sliceU } from './sliceU'

export const takeU = (n, array) => sliceU(0, maxU(n, 0), array)
