import { setName } from '../core/internal/index.js'
import { curry2 } from '../function/index.js'
import { appendU } from './internal/index.js'

export const append = setName(curry2(appendU), 'append')
