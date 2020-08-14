import { curryNU } from './internal/curryNU'
import { curry2 } from './internal/curry2'

export const curryN = curry2(curryNU)
