import { setName } from '../core/internal/setName.js'
import { curry2 } from '../function/curry2.js'
import { omitU } from './internal/omitU.js'

export const omit = setName(curry2(omitU), 'omit')
