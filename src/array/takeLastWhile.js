import { curry2 } from '../curry2.js'
import { setName } from '../internal/setName.js'
import { takeDropWhile } from './internal/takeDropWhile.js'

const takeLastWhileU = (fn, array) => takeDropWhile(fn, array, true, true)

export const takeLastWhile = setName(curry2(takeLastWhileU), 'takeLastWhile')
