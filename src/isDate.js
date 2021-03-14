import { nodeIsDate } from './internal/builtins'
import { dateTag, getTag } from './internal/getTag'
import { isObjectLike } from './internal/isObjectLike'

export const isDate =
  nodeIsDate ||
  /* istanbul ignore next */ ((value) =>
    isObjectLike(value) && getTag(value) === dateTag)
