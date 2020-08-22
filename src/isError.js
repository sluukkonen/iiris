import { errorTag, getTag } from './internal/getTag'
import { isObject } from './isObject'

export const isError = (value) => isObject(value) && getTag(value) === errorTag
