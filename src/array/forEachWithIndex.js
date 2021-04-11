import { setName } from '../core/internal/index.js'
import { curry2 } from '../function/index.js'
import { forEachWithIndexU } from './internal/index.js'

export const forEachWithIndex = setName(
  curry2(forEachWithIndexU),
  'forEachWithIndex'
)
