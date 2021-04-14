import { curry2 } from '../function/curry2.js'
import { setName } from '../core/internal/setName.js'
import { hasU } from './internal/hasU.js'

export const has = setName(curry2(hasU), 'has')
