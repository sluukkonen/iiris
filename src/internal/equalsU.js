import { isArray } from '../isArray'
import { isObject } from '../isObject'
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
import { isSameValueZero } from './isSameValueZero'
import { string, getPrototypeOf, objectKeys, objectProto } from './builtins'

export const equalsU = (a, b, cycles) => {
  if (a === b) {
    return true
  }

  // If either one is not an object, we can bail out early if both values are
  // not NaN.
  if (!isObject(a) || !isObject(b)) {
    return a !== a && b !== b
  }

  // Fast path for plain objects
  const aProto = getPrototypeOf(a)
  if (aProto === objectProto) {
    return getPrototypeOf(b) === objectProto && equalsObject(a, b, cycles)
  } else if (getPrototypeOf(b) !== aProto) {
    // If prototypes do not match, return false.
    return false
  }

  // Fast path for arrays
  if (isArray(a)) {
    return isArray(b) ? equalsArray(a, b, cycles) : false
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
      return string(a) === string(b)
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
  }

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

  for (let i = 0; i < length; i++) {
    if (!equalsU(a[i], b[i], cycles)) {
      return false
    }
  }

  // Clear cycle map.
  cycles.delete(a)
  cycles.delete(b)

  return true
}

const equalsObject = (a, b, cycles) => {
  const aKeys = objectKeys(a)
  const bKeys = objectKeys(b)

  const length = aKeys.length

  if (length !== bKeys.length) {
    return false
  }

  // As an optimization, try to find a key mismatch before starting to compare
  // the equality of the values.
  for (let i = 0; i < length; i++) {
    if (!hasOwn(b, aKeys[i])) {
      return false
    }
  }

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

  // Keys match. Now compare the values.
  for (let i = 0; i < length; i++) {
    const key = aKeys[i]
    if (!equalsU(a[key], b[key], cycles)) {
      return false
    }
  }

  // Clear cycle map.
  cycles.delete(a)
  cycles.delete(b)

  return true
}

const equalsSet = (a, b) => {
  if (a.size !== b.size) {
    return false
  }

  for (const value of a) {
    if (!b.has(value)) {
      return false
    }
  }

  return true
}

const equalsMap = (a, b, cycles) => {
  if (a.size !== b.size) {
    return false
  }

  // As an optimization, try to find a key mismatch before starting to compare
  // the equality of the values.
  for (const key of a.keys()) {
    if (!b.has(key)) {
      return false
    }
  }

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

  for (const [key, value] of a) {
    if (!equalsU(value, b.get(key), cycles)) {
      return false
    }
  }

  cycles.delete(a)
  cycles.delete(b)

  return true
}
