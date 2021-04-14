import { setName } from '../internal/setName.js'
import { curry2 } from '../curry2.js'
import { intersperseU } from './internal/intersperseU.js'

export const intersperse = setName(curry2(intersperseU), 'intersperse')
