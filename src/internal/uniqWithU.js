import { includesBy } from './includesBy'

export const uniqWithU = (eq, array) => {
  const result = []

  for (const value of array) {
    if (!includesBy(eq, value, result)) {
      result.push(value)
    }
  }

  return result
}
