import { curry2 } from './internal/curry2'
import { setName } from './internal/setName'
import { hasU } from './internal/hasU'

export const has = setName(curry2(hasU), 'has')
