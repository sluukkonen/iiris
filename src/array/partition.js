import { setName } from '../internal/setName.js'
import { curry2 } from '../curry2.js'
import { partitionU } from './internal/partitionU.js'

export const partition = setName(curry2(partitionU), 'partition')
