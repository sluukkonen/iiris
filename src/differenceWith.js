import { curry2 } from './curry2'
import { differenceWithU } from './internal/differenceWithU'
import { setName } from './internal/setName'

export const differenceWith = setName(curry2(differenceWithU), 'differenceWith')
