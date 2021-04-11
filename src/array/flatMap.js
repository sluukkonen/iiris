import { setName } from '../core/internal/index.js'
import { curry2 } from '../function/index.js'
import { flatMapU } from './internal/index.js'

export const flatMap = setName(curry2(flatMapU), 'flatMap')
