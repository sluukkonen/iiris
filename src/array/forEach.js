import { setName } from '../internal/setName.js'
import { curry2 } from '../curry2.js'
import { forEachU } from './internal/forEachU.js'

export const forEach = setName(curry2(forEachU), 'forEach')
