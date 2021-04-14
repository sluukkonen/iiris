import { setName } from '../core/internal/setName.js'
import { curry2 } from '../function/curry2.js'
import { differenceU } from './internal/differenceU.js'

export const difference = setName(curry2(differenceU), 'difference')
