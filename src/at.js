import { curry2 } from './curry2'
import { atU } from './internal/atU'
import { setName } from './internal/setName'

export const at = setName(curry2(atU), 'at')
