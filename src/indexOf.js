import { curry2 } from './curry2'
import { indexOfU } from './internal/indexOfU'
import { setName } from './internal/setName'

export const indexOf = setName(curry2(indexOfU), 'indexOf')
