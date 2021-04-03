import { curry2 } from './curry2'
import { mapWithIndexU } from './internal/mapWithIndexU'
import { setName } from './internal/setName'

export const mapWithIndex = setName(curry2(mapWithIndexU), 'mapWithIndex')
