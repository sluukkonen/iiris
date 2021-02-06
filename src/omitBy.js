import { curry2 } from './curry2'
import { omitByU } from './internal/omitByU'
import { setName } from './internal/setName'

export const omitBy = setName(curry2(omitByU), 'omitBy')
