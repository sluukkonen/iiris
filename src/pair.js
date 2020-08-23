import { curry2 } from './internal/curry2'
import { pairU } from './internal/pairU'
import { setName } from './internal/setName'

export const pair = setName(curry2(pairU), 'pair')
