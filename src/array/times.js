import { setName } from '../core/internal/index.js'
import { curry2 } from '../function/index.js'
import { timesU } from './internal/index.js'

export const times = setName(curry2(timesU), 'times')
