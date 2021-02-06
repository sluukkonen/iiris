import { curry2 } from './curry2'
import { forEachU } from './internal/forEachU'
import { setName } from './internal/setName'

export const forEach = setName(curry2(forEachU), 'forEach')
