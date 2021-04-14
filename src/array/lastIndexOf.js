import { setName } from '../internal/setName.js'
import { curry2 } from '../curry2.js'
import { lastIndexOfU } from './internal/lastIndexOfU.js'

export const lastIndexOf = setName(curry2(lastIndexOfU), 'lastIndexOf')
