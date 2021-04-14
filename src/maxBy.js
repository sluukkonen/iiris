import { curry3 } from './curry3.js'
import { setName } from './internal/setName.js'

export const maxByU = (fn, a, b) => (fn(a) > fn(b) ? a : b)

export const maxBy = setName(curry3(maxByU), 'maxBy')
