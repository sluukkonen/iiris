import { curry2 } from './curry2'
import { clampU } from './internal/clampU'
import { setName } from './internal/setName'

export const clamp = setName(curry2(clampU), 'clamp')
