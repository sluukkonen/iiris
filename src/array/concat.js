import { curry2 } from '../curry2.js'
import { setName } from '../internal/setName.js'

const concatU = (a1, a2) => [...a1, ...a2]

export const concat = setName(curry2(concatU), 'concat')
