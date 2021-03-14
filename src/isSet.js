import { nodeIsSet } from './internal/builtins'
import { getTag, setTag } from './internal/getTag'
import { isObjectLike } from './internal/isObjectLike'

export const isSet =
  nodeIsSet ||
  /* istanbul ignore next */ ((value) =>
    isObjectLike(value) && getTag(value) === setTag)
