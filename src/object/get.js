import { setName } from '../core/internal/index.js'
import { curry2 } from '../function/index.js'
import { getU } from './internal/index.js'

export const get = setName(curry2(getU), 'get')
