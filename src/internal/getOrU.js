import { isString } from '../isString'
import { numberIsInteger } from './builtins'
import { getOrArray } from './getOrArray'
import { getOrObject } from './getOrObject'
import { throwInvalidKeyError } from './throwInvalidKeyError'

export const getOrU = (defaultValue, key, target) =>
  isString(key)
    ? getOrObject(defaultValue, key, target)
    : numberIsInteger(key)
    ? getOrArray(defaultValue, key, target)
    : throwInvalidKeyError(key)
