import { curry2 } from './curry2'
import { filterWithIndexU } from './internal/filterWithIndexU'
import { setName } from './internal/setName'

export const filterWithIndex = setName(
  curry2(filterWithIndexU),
  'filterWithIndex'
)
