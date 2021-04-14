import { setName } from '../internal/setName.js'
import { curry2 } from '../curry2.js'
import { dropLastU } from './internal/dropLastU.js'

export const dropLast = setName(curry2(dropLastU), 'dropLast')
