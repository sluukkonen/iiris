import { setName } from '../internal/setName.js'
import { curry2 } from '../curry2.js'
import { sumByU } from './internal/sumByU.js'

export const sumBy = setName(curry2(sumByU), 'sumBy')
