import { curry2 } from './curry2'
import { setName } from './internal/setName'
import { valueOrU } from './internal/valueOrU'

export const valueOr = setName(curry2(valueOrU), 'valueOr')
