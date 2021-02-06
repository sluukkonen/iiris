import { curry2 } from './curry2'
import { setName } from './internal/setName'
import { hasU } from './internal/hasU'

export const has = setName(curry2(hasU), 'has')
