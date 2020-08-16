import { curryNU } from './internal/curryNU'
import { curry2 } from './internal/curry2'
import { setName } from './internal/setName'

export const curryN = setName(curry2(curryNU), 'curryN')
