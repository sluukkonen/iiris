import { setName } from '../core/internal/index.js'
import { curry3 } from '../function/index.js'
import { nthEqualsU } from './internal/index.js'

export const nthEquals = setName(curry3(nthEqualsU), 'nthEquals')
