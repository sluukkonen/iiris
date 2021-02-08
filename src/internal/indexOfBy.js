import { numberIsNan } from './builtins'
import { equalsU } from './equalsU'
import { isObjectLike } from './isObjectLike'

export const indexOfBy = (eq, value, array) => {
  if (eq === equalsU && !isObjectLike(value) && !numberIsNan(value)) {
    return array.indexOf(value)
  }

  for (let i = 0; i < array.length; i++) {
    if (eq(value, array[i])) {
      return i
    }
  }

  return -1
}
