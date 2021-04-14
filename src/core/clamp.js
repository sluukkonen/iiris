import { curry2 } from '../function/curry2.js'
import { clampU } from './internal/clampU.js'
import { setName } from './internal/setName.js'

export const clamp = setName(curry2(clampU), 'clamp')
