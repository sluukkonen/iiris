import { curry2 } from './internal/curry2'
import { setName } from './internal/setName'
import { takeLastU } from './internal/takeLastU'

export const takeLast = setName(curry2(takeLastU), 'takeLast')
