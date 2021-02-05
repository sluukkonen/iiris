import { getTag, setTag } from './internal/getTag'
import { isObjectLike } from './internal/isObjectLike'

export const isSet = (value) => isObjectLike(value) && getTag(value) === setTag
