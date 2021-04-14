import { setName } from '../internal/setName.js'
import { curry2 } from '../curry2.js'
import { testU } from './internal/testU.js'

export const test = setName(curry2(testU), 'test')
