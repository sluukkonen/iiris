import { setName } from '../core/internal/setName.js'
import { curry2 } from '../function/curry2.js'
import { pickU } from './internal/pickU.js'

export const pick = setName(curry2(pickU), 'pick')
