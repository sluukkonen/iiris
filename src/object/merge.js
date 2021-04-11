import { setName } from '../core/internal/index.js'
import { curry2 } from '../function/index.js'
import { mergeU } from './internal/index.js'

export const merge = setName(curry2(mergeU), 'merge')
