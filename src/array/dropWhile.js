import { setName } from '../core/internal/setName.js'
import { curry2 } from '../function/curry2.js'
import { dropWhileU } from './internal/dropWhileU.js'

export const dropWhile = setName(curry2(dropWhileU), 'dropWhile')
