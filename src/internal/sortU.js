import { cloneArray } from './cloneArray'

export const sortU = (comparator, array) => cloneArray(array).sort(comparator)
