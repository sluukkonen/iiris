import { nodeIsRegExp } from './internal/builtins'
import { getTag, regExpTag } from './internal/getTag'
import { isObjectLike } from './internal/isObjectLike'

export const isRegExp =
  nodeIsRegExp ||
  /* istanbul ignore next */ ((value) =>
    isObjectLike(value) && getTag(value) === regExpTag)
