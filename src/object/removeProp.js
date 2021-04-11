import { setName } from '../core/internal/index.js'
import { curry2 } from '../function/index.js'
import { removePropU } from './internal/index.js'

export const removeProp = setName(curry2(removePropU), 'removeProp')
