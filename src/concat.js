import { concatU } from './internal/concatU'
import { curry2 } from './internal/curry2'
import { setName } from './internal/setName'

export const concat = setName(curry2(concatU), 'concat')
