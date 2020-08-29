import { isString } from '../isString'
import { getOrArray } from './getOrArray'
import { getOrObject } from './getOrObject'
import { isArrayIndex } from './isArrayIndex'
import { throwInvalidKeyError } from './throwInvalidKeyError'

export const getOrU = (defaultValue, key, target) =>
  isString(key)
    ? getOrObject(defaultValue, key, target)
    : isArrayIndex(key)
    ? getOrArray(defaultValue, key, target)
    : throwInvalidKeyError(key)
