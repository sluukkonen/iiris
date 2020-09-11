import { clampU } from './internal/clampU'
import { curry2 } from './internal/curry2'
import { setName } from './internal/setName'

export const clamp = setName(curry2(clampU), 'clamp')
