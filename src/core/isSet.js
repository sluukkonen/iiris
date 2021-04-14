import { getTag, setTag } from './internal/getTag.js'
import { isObjectLike } from './internal/isObjectLike.js'

export const isSet = (value) => isObjectLike(value) && getTag(value) === setTag
