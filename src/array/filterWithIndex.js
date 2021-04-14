import { setName } from '../core/internal/setName.js'
import { curry2 } from '../function/curry2.js'
import { filterWithIndexU } from './internal/filterWithIndexU.js'

export const filterWithIndex = setName(
  curry2(filterWithIndexU),
  'filterWithIndex'
)
