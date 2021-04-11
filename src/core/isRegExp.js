import { getTag, isObjectLike, regExpTag } from './internal/index.js'

export const isRegExp = (value) =>
  isObjectLike(value) && getTag(value) === regExpTag
