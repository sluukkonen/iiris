import { curry2 } from './curry2'
import { setName } from './internal/setName'
import { sumByU } from './internal/sumByU'

export const sumBy = setName(curry2(sumByU), 'sumBy')
