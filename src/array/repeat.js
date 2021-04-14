import { constant } from '../constant.js'
import { curry2 } from '../curry2.js'
import { setName } from '../internal/setName.js'
import { timesU } from './times.js'

const repeatU = (value, n) => timesU(constant(value), n)

export const repeat = setName(curry2(repeatU), 'repeat')
