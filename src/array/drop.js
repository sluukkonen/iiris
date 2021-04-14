import { curry2 } from '../curry2.js'
import { setName } from '../internal/setName.js'
import { maxU } from '../max.js'
import { sliceU } from './slice.js'

export const dropU = (n, array) => sliceU(maxU(n, 0), array.length, array)

export const drop = setName(curry2(dropU), 'drop')
