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
import { getPrototypeOf, objectProto } from './builtins'

export const isEqualU = (a, b, cycles) => {
  if (a === b) {
    return true
  }

  // If either one is not an object, we can bail out early.
  if (!isObject(a) || !isObject(b)) {
    // Return true if both are NaN.
    return a !== a && b !== b
  }

  // We now know that both values are objects.

  // Fast path for plain objects
  const aProto = getPrototypeOf(a)
  if (getPrototypeOf(a) === objectProto) {
    return getPrototypeOf(b) === objectProto && isEqualObject(a, b, cycles)
  } else if (getPrototypeOf(b) !== aProto) {
    // If prototypes do not match, return false.
    return false
  }

  // Fast path for arrays
  if (isArray(a)) {
    return isArray(b) ? isEqualArray(a, b, cycles) : false
  }

  // Fast paths have failed. We need to perform a tag check.
  const tag = getTag(a)
  return tag === getTag(b) && isEqualByTag(a, b, tag, cycles)
}

const isEqualByTag = (a, b, tag, cycles) => {
  switch (tag) {
    case objectTag:
      return isEqualObject(a, b, cycles)
    case setTag:
      return isEqualSet(a, b, cycles)
    case mapTag:
      return isEqualMap(a, b, cycles)
    case regExpTag:
    case stringTag:
      return String(a) === String(b)
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

const isEqualArray = (a, b, cycles) => {
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
    if (!isEqualU(a[i], b[i], cycles)) {
      return false
    }
  }

  // Clear cycle map.
  cycles.delete(a)
  cycles.delete(b)

  return true
}

const isEqualObject = (a, b, cycles) => {
  const aKeys = Object.keys(a)
  const bKeys = Object.keys(b)

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
    if (!isEqualU(a[key], b[key], cycles)) {
      return false
    }
  }

  // Clear cycle map.
  cycles.delete(a)
  cycles.delete(b)

  return true
}

const isEqualSet = (a, b) => {
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

const isEqualMap = (a, b, cycles) => {
  if (a.size !== b.size) {
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

  for (const [key, value] of a) {
    if (!b.has(key) || !isEqualU(value, b.get(key), cycles)) {
      return false
    }
  }

  cycles.delete(a)
  cycles.delete(b)

  return true
}
