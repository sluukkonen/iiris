import { curry2 } from '../curry2.js'
import { setName } from '../internal/setName.js'
import { takeDropWhile } from './internal/takeDropWhile.js'

const dropLastWhileU = (fn, array) => takeDropWhile(fn, array, false, true)

export const dropLastWhile = setName(curry2(dropLastWhileU), 'dropLastWhile')
