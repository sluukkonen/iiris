import { appendU } from './internal/appendU'
import { curry2 } from './curry2'
import { setName } from './internal/setName'

export const append = setName(curry2(appendU), 'append')
