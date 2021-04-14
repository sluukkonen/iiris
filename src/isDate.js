import { dateTag, getTag } from './internal/getTag.js'
import { isObjectLike } from './internal/isObjectLike.js'

export const isDate = (value) =>
  isObjectLike(value) && getTag(value) === dateTag
