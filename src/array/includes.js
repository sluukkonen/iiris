import { curry2 } from '../curry2.js'
import { equalsU } from '../equals.js'
import { setName } from '../internal/setName.js'
import { includesBy } from './internal/includesBy.js'

const includesU = (value, array) => includesBy(equalsU, value, array)

export const includes = setName(curry2(includesU), 'includes')
