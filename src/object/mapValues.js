import { setName } from '../core/internal/index.js'
import { curry2 } from '../function/index.js'
import { mapValuesU } from './internal/index.js'

export const mapValues = setName(curry2(mapValuesU), 'mapValues')
