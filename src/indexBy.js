import { curry2 } from './curry2'
import { indexByU } from './internal/indexByU'
import { setName } from './internal/setName'

export const indexBy = setName(curry2(indexByU), 'indexBy')
