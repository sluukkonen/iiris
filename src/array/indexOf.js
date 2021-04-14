import { curry2 } from '../curry2.js'
import { equalsU } from '../equals.js'
import { setName } from '../internal/setName.js'
import { indexOfBy } from './internal/indexOfBy.js'

const indexOfU = (value, array) => indexOfBy(equalsU, value, array)

export const indexOf = setName(curry2(indexOfU), 'indexOf')
