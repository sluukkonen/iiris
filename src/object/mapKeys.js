import { setName } from '../core/internal/index.js'
import { curry2 } from '../function/index.js'
import { mapKeysU } from './internal/index.js'

export const mapKeys = setName(curry2(mapKeysU), 'mapKeys')
