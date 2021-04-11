import { setName } from '../core/internal/index.js'
import { curry2 } from '../function/index.js'
import { testU } from './internal/index.js'

export const test = setName(curry2(testU), 'test')
