import { curry2 } from './curry2'
import { intersperseU } from './internal/intersperseU'
import { setName } from './internal/setName'

export const intersperse = setName(curry2(intersperseU), 'intersperse')
