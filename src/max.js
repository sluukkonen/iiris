import { setName } from './internal/setName'
import { curry2 } from './internal/curry2'
import { maxU } from './internal/maxU'

export const max = setName(curry2(maxU), 'max')
