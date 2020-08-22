import { getTag, regExpTag } from './internal/getTag'
import { isObject } from './isObject'

export const isRegExp = (value) =>
  isObject(value) && getTag(value) === regExpTag
