import { equalsU } from '../../equals.js'
import { builtinIsNaN } from '../../internal/builtins.js'
import { isObjectLike } from '../../internal/isObjectLike.js'

export const lastIndexOfBy = (eq, value, array) => {
  if (eq === equalsU && !isObjectLike(value) && !builtinIsNaN(value)) {
    return array.lastIndexOf(value)
  }

  let i = array.length

  while (i--) {
    if (eq(value, array[i])) {
      return i
    }
  }

  return -1
}
