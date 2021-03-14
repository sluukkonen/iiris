import { nodeIsMap } from './internal/builtins'
import { getTag, mapTag } from './internal/getTag'
import { isObjectLike } from './internal/isObjectLike'

export const isMap =
  nodeIsMap ||
  /* istanbul ignore next */ ((value) =>
    isObjectLike(value) && getTag(value) === mapTag)
