import { setName } from '../core/internal/index.js'
import { curry2 } from '../function/index.js'
import { mapWithIndexU } from './internal/index.js'

export const mapWithIndex = setName(curry2(mapWithIndexU), 'mapWithIndex')
