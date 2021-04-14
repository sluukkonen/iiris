import { setName } from '../internal/setName.js'
import { curry2 } from '../curry2.js'
import { mapKeysU } from './internal/mapKeysU.js'

export const mapKeys = setName(curry2(mapKeysU), 'mapKeys')
