import { curry2 } from './curry2'
import { differenceU } from './internal/differenceU'
import { setName } from './internal/setName'

export const difference = setName(curry2(differenceU), 'difference')
