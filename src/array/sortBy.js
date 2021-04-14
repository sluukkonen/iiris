import { ascend } from '../ascend.js'
import { curry2 } from '../curry2.js'
import { setName } from '../internal/setName.js'
import { sortU } from './sort.js'

const sortByU = (fn, array) => sortU(ascend(fn), array)

export const sortBy = setName(curry2(sortByU), 'sortBy')
