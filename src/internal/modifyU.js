import { isString } from '../isString'
import { isArrayIndex } from './isArrayIndex'
import { modifyArray } from './modifyArray'
import { modifyObject } from './modifyObject'
import { throwInvalidKeyError } from './throwInvalidKeyError'

export const modifyU = (key, fn, target) =>
  isString(key)
    ? modifyObject(key, fn, target)
    : isArrayIndex(key)
    ? modifyArray(key, fn, target)
    : throwInvalidKeyError(key)
