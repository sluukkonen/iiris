import { setName } from './internal/setName'
import { curry3 } from './curry3'
import { propEqualsU } from './internal/propEqualsU'

export const propEquals = setName(curry3(propEqualsU), 'propEquals')
