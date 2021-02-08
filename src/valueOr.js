import { curry2 } from './curry2'
import { valueOrU } from './internal/valueOrU'
import { setName } from './internal/setName'

export const valueOr = setName(curry2(valueOrU), 'valueOr')
