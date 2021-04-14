import { setName } from '../internal/setName.js'
import { curry2 } from '../curry2.js'
import { mapValuesU } from './internal/mapValuesU.js'

export const mapValues = setName(curry2(mapValuesU), 'mapValues')
