import { builtinIsNaN } from './builtins'
import { equalsU } from './equalsU'
import { isObjectLike } from './isObjectLike'

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
