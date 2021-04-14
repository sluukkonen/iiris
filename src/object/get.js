import { setName } from '../internal/setName.js'
import { curry2 } from '../curry2.js'
import { getU } from './internal/getU.js'

export const get = setName(curry2(getU), 'get')
