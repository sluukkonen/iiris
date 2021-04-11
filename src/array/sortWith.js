import { setName } from '../core/internal/index.js'
import { curry2 } from '../function/index.js'
import { sortWithU } from './internal/index.js'

export const sortWith = setName(curry2(sortWithU), 'sortWith')
