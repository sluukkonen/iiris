import { setName } from '../core/internal/setName.js'
import { curry2 } from '../function/curry2.js'
import { mapMaybeU } from './internal/mapMaybeU.js'

export const mapMaybe = setName(curry2(mapMaybeU), 'mapMaybe')
