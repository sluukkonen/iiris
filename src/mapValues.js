import { curry2 } from './curry2'
import { mapValuesU } from './internal/mapValuesU'
import { setName } from './internal/setName'

export const mapValues = setName(curry2(mapValuesU), 'mapValues')
