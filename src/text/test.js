import { curry2 } from '../curry2.js'
import { setName } from '../internal/setName.js'

const testU = (regexp, str) => regexp.test(str)

export const test = setName(curry2(testU), 'test')
