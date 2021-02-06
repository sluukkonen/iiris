import { curry2 } from './internal/curry2'
import { setName } from './internal/setName'
import { mapKeysU } from './internal/mapKeysU'

export const mapKeys = setName(curry2(mapKeysU), 'mapKeys')
