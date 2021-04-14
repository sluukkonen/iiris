import { errorTag, getTag } from './internal/getTag.js'
import { isObjectLike } from './internal/isObjectLike.js'

export const isError = (value) =>
  isObjectLike(value) && getTag(value) === errorTag
