import { sliceU } from './sliceU'
import { maxU } from './maxU'

export const takeU = (n, array) => sliceU(0, maxU(n, 0), array)
