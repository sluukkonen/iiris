import { curry2 } from './curry2'
import { dropWhileU } from './internal/dropWhileU'
import { setName } from './internal/setName'

export const dropWhile = setName(curry2(dropWhileU), 'dropWhile')
