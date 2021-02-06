import { curry2 } from './curry2'
import { omitU } from './internal/omitU'
import { setName } from './internal/setName'

export const omit = setName(curry2(omitU), 'omit')
