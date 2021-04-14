import { setName } from '../internal/setName.js'
import { curry2 } from '../curry2.js'
import { filterWithIndexU } from './internal/filterWithIndexU.js'

export const filterWithIndex = setName(
  curry2(filterWithIndexU),
  'filterWithIndex'
)
