import { curry2 } from './curry2'
import { setName } from './internal/setName'
import { uniqByU } from './internal/uniqByU'

export const uniqBy = setName(curry2(uniqByU), 'uniqBy')
