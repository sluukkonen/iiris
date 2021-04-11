import { setName } from '../core/internal/index.js'
import { curry2 } from '../function/index.js'
import { differenceU } from './internal/index.js'

export const difference = setName(curry2(differenceU), 'difference')
