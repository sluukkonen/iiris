import { setName } from './internal/setName'
import { curry2 } from './curry2'
import { testU } from './internal/testU'

export const test = setName(curry2(testU), 'test')
