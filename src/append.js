import { curry2 } from './curry2'
import { appendU } from './internal/appendU'
import { setName } from './internal/setName'

export const append = setName(curry2(appendU), 'append')
