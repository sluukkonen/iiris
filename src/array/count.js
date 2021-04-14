import { setName } from '../internal/setName.js'
import { curry2 } from '../curry2.js'
import { countU } from './internal/countU.js'

export const count = setName(curry2(countU), 'count')
