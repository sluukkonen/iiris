import { setName } from '../internal/setName.js'
import { curry2 } from '../curry2.js'
import { repeatU } from './internal/repeatU.js'

export const repeat = setName(curry2(repeatU), 'repeat')
