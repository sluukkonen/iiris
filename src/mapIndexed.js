import { curry2 } from './curry2'
import { mapIndexedU } from './internal/mapIndexedU'
import { setName } from './internal/setName'

export const mapIndexed = setName(curry2(mapIndexedU), 'mapIndexed')
