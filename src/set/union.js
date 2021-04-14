import { curry2 } from '../curry2.js'
import { setName } from '../internal/setName.js'
import { copySet } from './internal/copySet.js'

const unionU = (xs, ys) => {
  const result = copySet(xs)

  for (const y of ys) {
    result.add(y)
  }

  return result
}

export const union = setName(curry2(unionU), 'union')
