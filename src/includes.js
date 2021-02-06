import { curry2 } from './curry2'
import { includesU } from './internal/includesU'
import { setName } from './internal/setName'

export const includes = setName(curry2(includesU), 'includes')
