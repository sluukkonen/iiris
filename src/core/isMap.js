import { getTag, isObjectLike, mapTag } from './internal/index.js'

export const isMap = (value) => isObjectLike(value) && getTag(value) === mapTag
