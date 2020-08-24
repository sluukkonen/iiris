import { isArray } from '../isArray'

export const flattenTo = (depth, array, to) => {
  for (let i = 0; i < array.length; i++) {
    const value = array[i]
    if (depth > 0 && isArray(value)) {
      flattenTo(depth - 1, value, to)
    } else {
      to.push(value)
    }
  }

  return to
}
