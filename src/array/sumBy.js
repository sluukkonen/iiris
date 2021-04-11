import { setName } from '../core/internal/index.js'
import { curry2 } from '../function/index.js'
import { sumByU } from './internal/index.js'

export const sumBy = setName(curry2(sumByU), 'sumBy')
