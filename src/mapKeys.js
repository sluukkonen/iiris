import { curry2 } from './curry2'
import { mapKeysU } from './internal/mapKeysU'
import { setName } from './internal/setName'

export const mapKeys = setName(curry2(mapKeysU), 'mapKeys')
