import { curry2 } from './curry2'
import { removeNthU } from './internal/removeNthU'
import { setName } from './internal/setName'

export const removeNth = setName(curry2(removeNthU), 'removeNth')
