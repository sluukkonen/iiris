import { curry2 } from '../curry2.js'
import { setName } from '../internal/setName.js'
import { dropU } from './drop.js'

const takeLastU = (n, array) => dropU(array.length - n, array)

export const takeLast = setName(curry2(takeLastU), 'takeLast')
