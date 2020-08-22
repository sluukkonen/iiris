import { getTag, mapTag } from './internal/getTag'
import { isObject } from './isObject'

export const isMap = (value) => isObject(value) && getTag(value) === mapTag
