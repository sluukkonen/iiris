import { copyArray } from './copyArray.js'

export const sortU = (comparator, array) => copyArray(array).sort(comparator)
