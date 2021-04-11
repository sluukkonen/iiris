import { copySet } from './copySet.js'
import { hasU } from './hasU.js'

export const addU = (value, set) =>
  hasU(value, set) ? set : copySet(set).add(value)
