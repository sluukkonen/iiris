import { maxU } from '../../core/internal/maxU.js'
import { sliceU } from './sliceU.js'

export const takeU = (n, array) => sliceU(0, maxU(n, 0), array)
