import { equalsU } from './internal/equalsU'
import { setName } from './internal/setName'
import { unionWith } from './unionWith'

export const union = setName(unionWith(equalsU), 'union')
