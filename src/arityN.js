import { curry2 } from './internal/curry2'
import { arityNU } from './internal/arityNU'
import { setName } from './internal/setName'

export const arityN = setName(curry2(arityNU), 'arityN')
