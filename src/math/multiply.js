import { setName } from '../core/internal/setName.js'
import { curry2 } from '../function/curry2.js'
import { multiplyU } from './internal/multiplyU.js'

export const multiply = setName(curry2(multiplyU), 'multiply')
