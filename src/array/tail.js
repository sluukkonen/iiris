import { sliceU } from './slice.js'

export const tail = (array) => sliceU(1, array.length, array)
