import { curry2 } from '../curry2.js'
import { setName } from '../internal/setName.js'
import { takeU } from './take.js'

const dropLastU = (n, array) => takeU(array.length - n, array)

export const dropLast = setName(curry2(dropLastU), 'dropLast')
