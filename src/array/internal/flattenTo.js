import { builtinIsArray } from '../../core/internal/index.js'

export const flattenTo = (depth, array, to) => {
  for (const value of array) {
    if (depth > 0 && builtinIsArray(value)) {
      flattenTo(depth - 1, value, to)
    } else {
      to.push(value)
    }
  }

  return to
}
