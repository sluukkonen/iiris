import { curry2 } from './curry2'
import { forEachWithIndexU } from './internal/forEachWithIndexU'
import { setName } from './internal/setName'

export const forEachWithIndex = setName(
  curry2(forEachWithIndexU),
  'forEachWithIndex'
)
