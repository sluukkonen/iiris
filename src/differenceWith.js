import { curry3 } from './curry3'
import { differenceWithU } from './internal/differenceWithU'
import { setName } from './internal/setName'

export const differenceWith = setName(curry3(differenceWithU), 'differenceWith')
