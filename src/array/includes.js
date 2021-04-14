import { setName } from '../internal/setName.js'
import { curry2 } from '../curry2.js'
import { includesU } from './internal/includesU.js'

export const includes = setName(curry2(includesU), 'includes')
