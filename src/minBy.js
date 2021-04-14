import { curry3 } from './curry3.js'
import { setName } from './internal/setName.js'

export const minByU = (fn, a, b) => (fn(a) < fn(b) ? a : b)

export const minBy = setName(curry3(minByU), 'minBy')
