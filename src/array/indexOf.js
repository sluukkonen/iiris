import { setName } from '../core/internal/setName.js'
import { curry2 } from '../function/curry2.js'
import { indexOfU } from './internal/indexOfU.js'

export const indexOf = setName(curry2(indexOfU), 'indexOf')
