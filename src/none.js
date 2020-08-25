import { curry2 } from './internal/curry2'
import { noneU } from './internal/noneU'
import { setName } from './internal/setName'

export const none = setName(curry2(noneU), 'none')
