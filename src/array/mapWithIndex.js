import { setName } from '../core/internal/setName.js'
import { curry2 } from '../function/curry2.js'
import { mapWithIndexU } from './internal/mapWithIndexU.js'

export const mapWithIndex = setName(curry2(mapWithIndexU), 'mapWithIndex')
