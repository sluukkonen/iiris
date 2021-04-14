import { splitU } from '../array/internal/splitU.js'
import { setName } from '../internal/setName.js'
import { curry2 } from '../curry2.js'

export const split = setName(curry2(splitU), 'split')
