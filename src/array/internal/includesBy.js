import { indexOfBy } from './indexOfBy.js'

export const includesBy = (eq, value, array) =>
  indexOfBy(eq, value, array) !== -1
