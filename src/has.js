import { curry2 } from './internal/curry2'
import { hasOwn } from './internal/hasOwn'
import { setName } from './internal/setName'
import { isNil } from './isNil'

export const has = setName(
  curry2((property, object) =>
    isNil(object) ? false : hasOwn(object, property)
  ),
  'has'
)
