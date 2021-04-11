import { getTag, isObjectLike, setTag } from './internal/index.js'

export const isSet = (value) => isObjectLike(value) && getTag(value) === setTag
