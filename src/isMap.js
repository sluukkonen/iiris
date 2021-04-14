import { getTag, mapTag } from './internal/getTag.js'
import { isObjectLike } from './internal/isObjectLike.js'

export const isMap = (value) => isObjectLike(value) && getTag(value) === mapTag
