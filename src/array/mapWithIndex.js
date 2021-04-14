import { setName } from '../internal/setName.js'
import { curry2 } from '../curry2.js'
import { mapWithIndexU } from './internal/mapWithIndexU.js'

export const mapWithIndex = setName(curry2(mapWithIndexU), 'mapWithIndex')
