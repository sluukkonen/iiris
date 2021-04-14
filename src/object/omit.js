import { setName } from '../internal/setName.js'
import { curry2 } from '../curry2.js'
import { omitU } from './internal/omitU.js'

export const omit = setName(curry2(omitU), 'omit')
