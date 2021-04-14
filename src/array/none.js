import { setName } from '../core/internal/setName.js'
import { curry2 } from '../function/curry2.js'
import { noneU } from './internal/noneU.js'

export const none = setName(curry2(noneU), 'none')
