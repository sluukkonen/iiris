import { propU } from './internal/propU'
import { setName } from './internal/setName'
import { curry2 } from './curry2'

export const prop = setName(curry2(propU), 'prop')
