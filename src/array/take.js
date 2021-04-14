import { curry2 } from '../curry2.js'
import { setName } from '../internal/setName.js'
import { maxU } from '../max.js'
import { sliceU } from './slice.js'

export const takeU = (n, array) => sliceU(0, maxU(n, 0), array)

export const take = setName(curry2(takeU), 'take')
