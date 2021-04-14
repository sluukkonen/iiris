import { setName } from '../core/internal/setName.js'
import { curry2 } from '../function/curry2.js'
import { mergeU } from './internal/mergeU.js'

export const merge = setName(curry2(mergeU), 'merge')
