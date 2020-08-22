import { dateTag, getTag } from './internal/getTag'
import { isObject } from './isObject'

export const isDate = (value) => isObject(value) && getTag(value) === dateTag
