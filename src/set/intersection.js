import { curry2 } from '../curry2.js'
import { setName } from '../internal/setName.js'
import { intersectionDifference } from './internal/intersectionDifference.js'

const intersectionU = (xs, ys) => intersectionDifference(xs, ys, true)

export const intersection = setName(curry2(intersectionU), 'intersection')
