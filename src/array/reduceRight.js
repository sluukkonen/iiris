import { curry3 } from '../curry3.js'
import { setName } from '../internal/setName.js'

const reduceRightU = (fn, initial, array) => {
  let i = array.length

  while (i--) {
    initial = fn(array[i], initial)
  }

  return initial
}

export const reduceRight = setName(curry3(reduceRightU), 'reduceRight')
