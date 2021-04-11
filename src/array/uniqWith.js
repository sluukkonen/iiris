import { setName } from '../core/internal/index.js'
import { curry2 } from '../function/index.js'
import { uniqWithU } from './internal/index.js'

export const uniqWith = setName(curry2(uniqWithU), 'uniqWith')
