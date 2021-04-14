import { curry2 } from '../curry2.js'
import { setName } from '../internal/setName.js'
import { someU } from './some.js'

const noneU = (fn, array) => !someU(fn, array)

export const none = setName(curry2(noneU), 'none')
