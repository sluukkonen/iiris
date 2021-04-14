import { curry2 } from '../curry2.js'
import { setName } from '../internal/setName.js'
import { timesU } from './times.js'

const rangeU = (start, end) => timesU((i) => start + i, end - start)

export const range = setName(curry2(rangeU), 'range')
