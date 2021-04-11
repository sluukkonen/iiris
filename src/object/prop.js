import { setName } from '../core/internal/index.js'
import { curry2 } from '../function/index.js'
import { propU } from './internal/index.js'

export const prop = setName(curry2(propU), 'prop')
