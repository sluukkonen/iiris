import { setName } from './internal/setName'
import { curry3 } from './curry3'
import { nthEqualsU } from './internal/nthEqualsU'

export const nthEquals = setName(curry3(nthEqualsU), 'nthEquals')
