import { curry2 } from './curry2.js'
import { setName } from './internal/setName.js'

const gtU = (a, b) => b > a

export const gt = setName(curry2(gtU), 'gt')
