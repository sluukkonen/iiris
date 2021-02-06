import { curry2 } from './curry2'
import { rangeU } from './internal/rangeU'
import { setName } from './internal/setName'

export const range = setName(curry2(rangeU), 'range')
