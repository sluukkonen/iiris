import { setName } from '../core/internal/index.js'
import { curry2 } from '../function/index.js'
import { mapMaybeU } from './internal/index.js'

export const mapMaybe = setName(curry2(mapMaybeU), 'mapMaybe')
