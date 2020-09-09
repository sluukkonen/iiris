import { curry2 } from './internal/curry2'
import { mapValuesU } from './internal/mapValuesU'
import { setName } from './internal/setName'

export const mapValues = setName(curry2(mapValuesU), 'mapValues')
