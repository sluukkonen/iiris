import { setName } from '../internal/setName.js'
import { curry2 } from '../curry2.js'
import { sortWithU } from './internal/sortWithU.js'

export const sortWith = setName(curry2(sortWithU), 'sortWith')
