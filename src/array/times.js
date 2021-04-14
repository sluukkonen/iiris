import { setName } from '../internal/setName.js'
import { curry2 } from '../curry2.js'
import { timesU } from './internal/timesU.js'

export const times = setName(curry2(timesU), 'times')
