import { isArray } from '../isArray'
import { isBoolean } from '../isBoolean'
import {
  builtinGetPrototypeOf,
  builtinKeys,
  builtinObjectProto,
  builtinString,
} from './builtins'
import {
  booleanTag,
  dateTag,
  errorTag,
  getTag,
  mapTag,
  numberTag,
  objectTag,
  regExpTag,
  setTag,
  stringTag,
} from './getTag'
import { hasOwn } from './hasOwn'
import { isObjectLike } from './isObjectLike'
import { isSameValueZero } from './isSameValueZero'

export const equalsU = (a, b, cycles) => {
  if (a === b) {
    return true
  }

  // If either one is not an object, we can bail out early if both values are
  // not NaN.
  if (!isObjectLike(a) || !isObjectLike(b)) {
    return a !== a && b !== b
  }

  // Fast path for plain objects
  if (
    builtinGetPrototypeOf(a) === builtinObjectProto &&
    builtinGetPrototypeOf(b) === builtinObjectProto
  ) {
    return equalsObject(a, b, cycles)
  }

  // Fast path for arrays
  if (isArray(a)) {
    return isArray(b) ? equalsArray(a, b, cycles) : false
  } else if (isArray(b)) {
    return false
  }

  // Fast paths have failed. We need to perform a tag check.
  const tag = getTag(a)
  return tag === getTag(b) && equalsByTag(a, b, tag, cycles)
}

const equalsByTag = (a, b, tag, cycles) => {
  switch (tag) {
    case objectTag:
      return equalsObject(a, b, cycles)
    case setTag:
      return equalsSet(a, b, cycles)
    case mapTag:
      return equalsMap(a, b, cycles)
    case regExpTag:
    case stringTag:
      return builtinString(a) === builtinString(b)
    case dateTag:
    case numberTag:
    case booleanTag:
      return isSameValueZero(+a, +b)
    case errorTag:
      return a.name === b.name && a.message === b.message
    default:
      return false
  }
}

const equalsArray = (a, b, cycles) => {
  const length = a.length

  if (length !== b.length) {
    return false
  } else if (length === 0) {
    return true
  }

  cycles = checkCycles(a, b, cycles)
  if (isBoolean(cycles)) return cycles

  for (let i = 0; i < length; i++) {
    if (!equalsU(a[i], b[i], cycles)) {
      return false
    }
  }

  clearCycles(a, b, cycles)

  return true
}

const equalsObject = (a, b, cycles) => {
  const aKeys = builtinKeys(a)
  const bKeys = builtinKeys(b)

  const length = aKeys.length
  if (length !== bKeys.length) {
    return false
  } else if (length === 0) {
    return true
  }

  // As an optimization, try to find a key mismatch before starting to compare
  // the equality of the values.
  for (const key of aKeys) {
    if (!hasOwn(b, key)) {
      return false
    }
  }

  cycles = checkCycles(a, b, cycles)
  if (isBoolean(cycles)) return cycles

  // Keys match. Now compare the values.
  for (const key of aKeys) {
    if (!equalsU(a[key], b[key], cycles)) {
      return false
    }
  }

  clearCycles(a, b, cycles)

  return true
}

const equalsSet = (a, b) => {
  const size = a.size
  if (size !== b.size) {
    return false
  } else if (size === 0) {
    return true
  }

  for (const value of a) {
    if (!b.has(value)) {
      return false
    }
  }

  return true
}

const equalsMap = (a, b, cycles) => {
  const size = a.size
  if (size !== b.size) {
    return false
  } else if (size === 0) {
    return true
  }

  // As an optimization, try to find a key mismatch before starting to compare
  // the equality of the values.
  for (const key of a.keys()) {
    if (!b.has(key)) {
      return false
    }
  }

  cycles = checkCycles(a, b, cycles)
  if (isBoolean(cycles)) return cycles

  for (const [key, value] of a) {
    if (!equalsU(value, b.get(key), cycles)) {
      return false
    }
  }

  clearCycles(a, b, cycles)

  return true
}

// FIXME: This function is pretty weird. Clean it up at some point.
const checkCycles = (a, b, cycles) => {
  if (cycles) {
    const cycle = cycles.get(a)
    if (cycle && cycles.get(b)) {
      return cycle === b
    }
  } else {
    cycles = new Map()
  }

  cycles.set(a, b)
  cycles.set(b, a)

  return cycles
}

const clearCycles = (a, b, cycles) => {
  cycles.delete(a)
  cycles.delete(b)
}
