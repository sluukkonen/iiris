import { setName } from '../internal/setName.js'
import { curry2 } from '../curry2.js'

const appendU = (value, array) => [...array, value]

export const append = setName(curry2(appendU), 'append')
