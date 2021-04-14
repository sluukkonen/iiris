import { setName } from '../core/internal/setName.js'
import { curry2 } from '../function/curry2.js'
import { intersectionU } from './internal/intersectionU.js'

export const intersection = setName(curry2(intersectionU), 'intersection')
