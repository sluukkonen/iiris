import { setName } from '../internal/setName.js'
import { curry2 } from '../curry2.js'
import { mapMaybeU } from './internal/mapMaybeU.js'

export const mapMaybe = setName(curry2(mapMaybeU), 'mapMaybe')
