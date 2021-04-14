import { curry2 } from '../curry2.js'
import { setName } from '../internal/setName.js'
import { takeDropWhile } from './internal/takeDropWhile.js'

const dropWhileU = (fn, array) => takeDropWhile(fn, array, false, false)

export const dropWhile = setName(curry2(dropWhileU), 'dropWhile')
