import { curry2 } from '../curry2.js'
import { setName } from '../internal/setName.js'
import { findLastIndexU } from './findLastIndex.js'

const findLastU = (fn, array) => {
  const index = findLastIndexU(fn, array)
  return index !== -1 ? array[index] : undefined
}

export const findLast = setName(curry2(findLastU), 'findLast')
