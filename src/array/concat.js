import { setName } from '../internal/setName.js'
import { curry2 } from '../curry2.js'
import { concatU } from './internal/concatU.js'

export const concat = setName(curry2(concatU), 'concat')
