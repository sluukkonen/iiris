import { setName } from '../internal/setName.js'
import { curry2 } from '../curry2.js'
import { dropLastWhileU } from './internal/dropLastWhileU.js'

export const dropLastWhile = setName(curry2(dropLastWhileU), 'dropLastWhile')
