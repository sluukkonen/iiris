import { sliceU } from './internal/sliceU'

export const tail = (array) => sliceU(1, array.length, array)
