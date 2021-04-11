import { setName } from '../core/internal/index.js'
import { curry2 } from '../function/index.js'
import { addU } from './internal/index.js'

export const add = setName(curry2(addU), 'add')
