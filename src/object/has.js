import { hasOwn, setName } from '../core/internal/index.js'
import { curry2 } from '../function/index.js'

export const has = setName(curry2(hasOwn), 'has')
