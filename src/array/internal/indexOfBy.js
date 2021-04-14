import { equalsU } from '../../equals.js'
import { builtinIsNaN } from '../../internal/builtins.js'
import { isObjectLike } from '../../internal/isObjectLike.js'

export const indexOfBy = (eq, value, array) => {
  if (eq === equalsU && !isObjectLike(value) && !builtinIsNaN(value)) {
    return array.indexOf(value)
  }

  for (let i = 0; i < array.length; i++) {
    if (eq(value, array[i])) {
      return i
    }
  }

  return -1
}
