import { curry4 } from '../curry4.js'
import { setName } from '../internal/setName.js'
import { hasU } from '../object/has.js'

const groupMapReduceU = (reducer, mapFn, keyFn, array) => {
  let result = {}

  for (const value of array) {
    const key = keyFn(value)
    result[key] = hasU(key, result)
      ? reducer(result[key], mapFn(value))
      : mapFn(value)
  }

  return result
}

export const groupMapReduce = setName(curry4(groupMapReduceU), 'groupMapReduce')
