import { curry2 } from './curry2'
import { filterIndexedU } from './internal/filterIndexedU'
import { setName } from './internal/setName'

export const filterIndexed = setName(curry2(filterIndexedU), 'filterIndexed')
