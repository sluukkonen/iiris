import { setName } from '../internal/setName.js'
import { curry2 } from '../curry2.js'
import { rangeU } from './internal/rangeU.js'

export const range = setName(curry2(rangeU), 'range')
