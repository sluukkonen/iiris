import { curry2 } from './curry2'
import { hasU } from './internal/hasU'
import { setName } from './internal/setName'

export const has = setName(curry2(hasU), 'has')
