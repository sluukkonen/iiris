import { dateTag, getTag } from './internal/getTag'
import { isObjectLike } from './internal/isObjectLike'

export const isDate = (value) =>
  isObjectLike(value) && getTag(value) === dateTag
