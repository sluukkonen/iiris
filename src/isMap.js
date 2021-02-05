import { getTag, mapTag } from './internal/getTag'
import { isObjectLike } from './internal/isObjectLike'

export const isMap = (value) => isObjectLike(value) && getTag(value) === mapTag
