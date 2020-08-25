import { curry2 } from './internal/curry2'
import { everyU } from './internal/everyU'
import { setName } from './internal/setName'

export const every = setName(curry2(everyU), 'every')
