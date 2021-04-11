import { setName } from '../core/internal/index.js'
import { curry2 } from '../function/index.js'
import { filterWithIndexU } from './internal/index.js'

export const filterWithIndex = setName(
  curry2(filterWithIndexU),
  'filterWithIndex'
)
