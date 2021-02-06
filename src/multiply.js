import { curry2 } from './curry2'
import { setName } from './internal/setName'
import { multiplyU } from './internal/multiplyU'

export const multiply = setName(curry2(multiplyU), 'multiply')
