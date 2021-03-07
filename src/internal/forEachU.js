import { unary } from '../unary'

export const forEachU = (fn, array) => {
  array.forEach(unary(fn))

  return array
}
