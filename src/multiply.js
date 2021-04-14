import { curry2 } from './curry2.js'
import { setName } from './internal/setName.js'

const multiplyU = (b, a) => b * a

export const multiply = setName(curry2(multiplyU), 'multiply')
