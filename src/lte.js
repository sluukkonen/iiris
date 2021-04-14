import { curry2 } from './curry2.js'
import { setName } from './internal/setName.js'

const lteU = (a, b) => b <= a

export const lte = setName(curry2(lteU), 'lte')
