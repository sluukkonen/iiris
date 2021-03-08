import { differenceWith } from './differenceWith'
import { equalsU } from './internal/equalsU'
import { setName } from './internal/setName'

export const difference = setName(differenceWith(equalsU), 'difference')
