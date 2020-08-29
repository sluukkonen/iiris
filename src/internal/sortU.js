import { copyArray } from './copyArray'

export const sortU = (comparator, array) => copyArray(array).sort(comparator)
