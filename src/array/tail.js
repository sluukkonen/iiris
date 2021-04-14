import { sliceU } from './internal/sliceU.js'

export const tail = (array) => sliceU(1, array.length, array)
