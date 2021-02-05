import { getTag, regExpTag } from './internal/getTag'
import { isObjectLike } from './internal/isObjectLike'

export const isRegExp = (value) =>
  isObjectLike(value) && getTag(value) === regExpTag
