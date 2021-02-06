import { curry2 } from './curry2'
import { dropLastWhileU } from './internal/dropLastWhileU'
import { setName } from './internal/setName'

export const dropLastWhile = setName(curry2(dropLastWhileU), 'dropLastWhile')
