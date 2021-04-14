import { setName } from './internal/setName.js'
import { curry2 } from './curry2.js'
import { multiplyU } from './internal/multiplyU.js'

export const multiply = setName(curry2(multiplyU), 'multiply')
