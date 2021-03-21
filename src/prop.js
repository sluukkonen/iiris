import { setName } from './internal/setName'
import { curry2 } from './curry2'
import { propU } from './internal/propU'

export const prop = setName(curry2(propU), 'prop')
