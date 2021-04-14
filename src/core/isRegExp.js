import { getTag, regExpTag } from './internal/getTag.js'
import { isObjectLike } from './internal/isObjectLike.js'

export const isRegExp = (value) =>
  isObjectLike(value) && getTag(value) === regExpTag
