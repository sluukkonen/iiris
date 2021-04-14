import { setName } from '../internal/setName.js'
import { curry2 } from '../curry2.js'
import { differenceU } from './internal/differenceU.js'

export const difference = setName(curry2(differenceU), 'difference')
