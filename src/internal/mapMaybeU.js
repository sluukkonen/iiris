import { isDefined } from '../isDefined'

export const mapMaybeU = (fn, array) => {
  const result = []

  for (let i = 0; i < array.length; i++) {
    const value = fn(array[i])
    if (isDefined(value)) {
      result.push(value)
    }
  }

  return result
}
