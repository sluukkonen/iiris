import { setName } from '../core/internal/index.js'
import { curry2 } from '../function/index.js'
import { intersectionU } from './internal/index.js'

export const intersection = setName(curry2(intersectionU), 'intersection')
