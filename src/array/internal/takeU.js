import { maxU } from '../../core/internal/index.js'
import { sliceU } from './sliceU.js'

export const takeU = (n, array) => sliceU(0, maxU(n, 0), array)
