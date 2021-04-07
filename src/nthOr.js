import { curry3 } from './curry3'
import { nthOrU } from './internal/nthOrU'
import { setName } from './internal/setName'

export const nthOr = setName(curry3(nthOrU), 'nthOr')
