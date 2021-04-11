import { setName } from '../core/internal/index.js'
import { curry2 } from '../function/index.js'
import { pickU } from './internal/index.js'

export const pick = setName(curry2(pickU), 'pick')
