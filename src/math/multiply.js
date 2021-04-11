import { setName } from '../core/internal/index.js'
import { curry2 } from '../function/index.js'
import { multiplyU } from './internal/index.js'

export const multiply = setName(curry2(multiplyU), 'multiply')
