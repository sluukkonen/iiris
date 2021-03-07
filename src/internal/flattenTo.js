import { isArray } from '../isArray'

export const flattenTo = (depth, array, to) => {
  for (const value of array) {
    if (depth > 0 && isArray(value)) {
      flattenTo(depth - 1, value, to)
    } else {
      to.push(value)
    }
  }

  return to
}
