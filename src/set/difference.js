import { curry2 } from '../curry2.js'
import { setName } from '../internal/setName.js'
import { intersectionDifference } from './internal/intersectionDifference.js'

const differenceU = (xs, ys) => intersectionDifference(xs, ys, false)

export const difference = setName(curry2(differenceU), 'difference')
