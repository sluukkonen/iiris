import { setName } from '../core/internal/index.js'
import { curry2 } from '../function/index.js'
import { repeatU } from './internal/index.js'

export const repeat = setName(curry2(repeatU), 'repeat')
