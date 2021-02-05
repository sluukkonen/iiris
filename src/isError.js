import { errorTag, getTag } from './internal/getTag'
import { isObjectLike } from './internal/isObjectLike'

export const isError = (value) =>
  isObjectLike(value) && getTag(value) === errorTag
