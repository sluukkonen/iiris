import { setName } from '../internal/setName.js'
import { curry2 } from '../curry2.js'
import { forEachWithIndexU } from './internal/forEachWithIndexU.js'

export const forEachWithIndex = setName(
  curry2(forEachWithIndexU),
  'forEachWithIndex'
)
