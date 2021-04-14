import { setName } from '../core/internal/setName.js'
import { curry2 } from '../function/curry2.js'
import { everyU } from './internal/everyU.js'

export const every = setName(curry2(everyU), 'every')
