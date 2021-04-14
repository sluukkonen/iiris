import { setName } from '../core/internal/setName.js'
import { curry2 } from '../function/curry2.js'
import { concatU } from './internal/concatU.js'

export const concat = setName(curry2(concatU), 'concat')
