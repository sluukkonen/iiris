import { isString } from '../isString'
import { numberIsInteger } from './builtins'
import { modifyArray } from './modifyArray'
import { modifyObject } from './modifyObject'
import { throwInvalidKeyError } from './throwInvalidKeyError'

export const modifyU = (key, fn, target) =>
  isString(key)
    ? modifyObject(key, fn, target)
    : numberIsInteger(key)
    ? modifyArray(key, fn, target)
    : throwInvalidKeyError(key)
