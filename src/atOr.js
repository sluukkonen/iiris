import { curry3 } from './curry3'
import { atOrU } from './internal/atOrU'
import { setName } from './internal/setName'

export const atOr = setName(curry3(atOrU), 'atOr')
