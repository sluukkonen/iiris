import { curry2 } from './internal/curry2'
import { arityU } from './internal/arityU'
import { setName } from './internal/setName'

export const arity = setName(curry2(arityU), 'arity')
