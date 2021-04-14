import { setName } from '../core/internal/setName.js'
import { curry2 } from '../function/curry2.js'
import { lastIndexOfU } from './internal/lastIndexOfU.js'

export const lastIndexOf = setName(curry2(lastIndexOfU), 'lastIndexOf')
