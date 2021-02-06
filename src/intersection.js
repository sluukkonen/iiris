import { curry2 } from './curry2'
import { intersectionU } from './internal/intersectionU'
import { setName } from './internal/setName'

export const intersection = setName(curry2(intersectionU), 'intersection')
