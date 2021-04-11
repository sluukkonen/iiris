import { setName } from '../core/internal/index.js'
import { curry3 } from '../function/index.js'
import { propEqualsU } from './internal/index.js'

export const propEquals = setName(curry3(propEqualsU), 'propEquals')
