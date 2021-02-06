import { curry2 } from './curry2'
import { setName } from './internal/setName'
import { timesU } from './internal/timesU'

export const times = setName(curry2(timesU), 'times')
