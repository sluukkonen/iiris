import { curry2 } from './internal/curry2'
import { partitionU } from './internal/partitionU'
import { setName } from './internal/setName'

export const partition = setName(curry2(partitionU), 'partition')
