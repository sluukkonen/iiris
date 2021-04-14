import { curry2 } from '../curry2.js'
import { setName } from '../internal/setName.js'

const partitionU = (predicate, array) => {
  const trues = []
  const falses = []

  for (const value of array) {
    const target = predicate(value) ? trues : falses
    target.push(value)
  }

  return [trues, falses]
}

export const partition = setName(curry2(partitionU), 'partition')
