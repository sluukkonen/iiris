import { getTag, setTag } from './internal/getTag'
import { isObject } from './isObject'

export const isSet = (value) => isObject(value) && getTag(value) === setTag
