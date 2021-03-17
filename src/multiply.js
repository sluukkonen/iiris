import { curry2 } from './curry2'
import { multiplyU } from './internal/multiplyU'
import { setName } from './internal/setName'

export const multiply = setName(curry2(multiplyU), 'multiply')
