import { setName } from '../internal/setName.js'
import { curry2 } from '../curry2.js'
import { intersectionU } from './internal/intersectionU.js'

export const intersection = setName(curry2(intersectionU), 'intersection')
