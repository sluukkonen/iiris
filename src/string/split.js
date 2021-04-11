import { splitU } from '../array/internal/index.js'
import { setName } from '../core/internal/index.js'
import { curry2 } from '../function/index.js'

export const split = setName(curry2(splitU), 'split')
