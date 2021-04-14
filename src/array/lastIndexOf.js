import { curry2 } from '../curry2.js'
import { equalsU } from '../equals.js'
import { setName } from '../internal/setName.js'
import { lastIndexOfBy } from './internal/lastIndexOfBy.js'

export const lastIndexOfU = (value, array) =>
  lastIndexOfBy(equalsU, value, array)

export const lastIndexOf = setName(curry2(lastIndexOfU), 'lastIndexOf')
