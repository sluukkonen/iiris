import { curry2 } from './curry2'
import { removeAtU } from './internal/removeAtU'
import { setName } from './internal/setName'

export const removeAt = setName(curry2(removeAtU), 'removeAt')
