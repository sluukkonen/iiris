import { setName } from '../core/internal/index.js'
import { curry2 } from '../function/index.js'
import { partitionU } from './internal/index.js'

export const partition = setName(curry2(partitionU), 'partition')
