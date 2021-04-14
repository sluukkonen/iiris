import { curry2 } from '../curry2.js'
import { setName } from '../internal/setName.js'
import { takeDropWhile } from './internal/takeDropWhile.js'

const takeWhileU = (fn, array) => takeDropWhile(fn, array, true, false)

export const takeWhile = setName(curry2(takeWhileU), 'takeWhile')
