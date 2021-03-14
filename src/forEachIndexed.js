import { curry2 } from './curry2'
import { forEachIndexedU } from './internal/forEachIndexedU'
import { setName } from './internal/setName'

export const forEachIndexed = setName(curry2(forEachIndexedU), 'forEachIndexed')
