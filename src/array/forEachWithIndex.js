import { setName } from '../core/internal/setName.js'
import { curry2 } from '../function/curry2.js'
import { forEachWithIndexU } from './internal/forEachWithIndexU.js'

export const forEachWithIndex = setName(
  curry2(forEachWithIndexU),
  'forEachWithIndex'
)
