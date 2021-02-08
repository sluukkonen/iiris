import { indexOfBy } from './indexOfBy'

export const includesBy = (eq, value, array) =>
  indexOfBy(eq, value, array) !== -1
