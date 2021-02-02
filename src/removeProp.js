import { curry2 } from './curry2'
import { removePropU } from './internal/removePropU'
import { setName } from './internal/setName'

export const removeProp = setName(curry2(removePropU), 'removeProp')
