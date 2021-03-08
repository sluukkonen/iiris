import { equalsU } from './internal/equalsU'
import { setName } from './internal/setName'
import { intersectionWith } from './intersectionWith'

export const intersection = setName(intersectionWith(equalsU), 'intersection')
