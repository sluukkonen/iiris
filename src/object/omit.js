import { setName } from '../core/internal/index.js'
import { curry2 } from '../function/index.js'
import { omitU } from './internal/index.js'

export const omit = setName(curry2(omitU), 'omit')
