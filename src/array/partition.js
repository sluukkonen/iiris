import { setName } from '../core/internal/setName.js'
import { curry2 } from '../function/curry2.js'
import { partitionU } from './internal/partitionU.js'

export const partition = setName(curry2(partitionU), 'partition')
