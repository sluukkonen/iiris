import { setName } from '../internal/setName.js'
import { curry2 } from '../curry2.js'
import { everyU } from './internal/everyU.js'

export const every = setName(curry2(everyU), 'every')
