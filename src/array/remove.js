import { setName } from '../core/internal/index.js'
import { curry2 } from '../function/index.js'
import { removeU } from './internal/index.js'

export const remove = setName(curry2(removeU), 'remove')
