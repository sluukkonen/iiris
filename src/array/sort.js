import { curry2 } from '../curry2.js'
import { setName } from '../internal/setName.js'
import { copyArray } from './internal/copyArray.js'

export const sortU = (comparator, array) => copyArray(array).sort(comparator)

export const sort = setName(curry2(sortU), 'sort')
