import { curry2 } from './internal/curry2'
import { ltU } from './internal/ltU'
import { setName } from './internal/setName'

export const lt = setName(curry2(ltU), 'lt')
