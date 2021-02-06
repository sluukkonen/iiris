import { curry2 } from './curry2'
import { dropLastU } from './internal/dropLastU'
import { setName } from './internal/setName'

export const dropLast = setName(curry2(dropLastU), 'dropLast')
