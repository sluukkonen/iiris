import { copySet } from './copySet.js'
import { hasU } from './hasU.js'

export const removeU = (value, set) => {
  if (hasU(value, set)) {
    const result = copySet(set)
    result.delete(value)
    return result
  }

  return set
}
