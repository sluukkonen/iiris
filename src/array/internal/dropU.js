import { maxU } from '../../core/internal/index.js'
import { sliceU } from './sliceU.js'

export const dropU = (n, array) => sliceU(maxU(n, 0), array.length, array)
