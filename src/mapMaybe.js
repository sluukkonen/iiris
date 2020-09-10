import { curry2 } from './internal/curry2'
import { mapMaybeU } from './internal/mapMaybeU'
import { setName } from './internal/setName'

export const mapMaybe = setName(curry2(mapMaybeU), 'mapMaybe')
