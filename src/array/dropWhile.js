import { setName } from '../internal/setName.js'
import { curry2 } from '../curry2.js'
import { dropWhileU } from './internal/dropWhileU.js'

export const dropWhile = setName(curry2(dropWhileU), 'dropWhile')
