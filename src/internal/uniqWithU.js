import { includesBy } from './includesBy'

export const uniqWithU = (eq, array) => {
  const result = []

  for (let i = 0; i < array.length; i++) {
    const value = array[i]
    if (!includesBy(eq, value, result)) {
      result.push(value)
    }
  }

  return result
}
