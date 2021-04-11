import { curry2 } from '../function/index.js'
import { clampU, setName } from './internal/index.js'

export const clamp = setName(curry2(clampU), 'clamp')
