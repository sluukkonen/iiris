import { sliceU } from './internal/index.js'

export const tail = (array) => sliceU(1, array.length, array)
