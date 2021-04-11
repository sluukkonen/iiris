import { dateTag, getTag, isObjectLike } from './internal/index.js'

export const isDate = (value) =>
  isObjectLike(value) && getTag(value) === dateTag
