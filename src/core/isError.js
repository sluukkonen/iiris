import { errorTag, getTag, isObjectLike } from './internal/index.js'

export const isError = (value) =>
  isObjectLike(value) && getTag(value) === errorTag
