import { setName } from '../internal/setName.js'
import { curry2 } from '../curry2.js'
import { appendU } from './internal/appendU.js'

export const append = setName(curry2(appendU), 'append')
