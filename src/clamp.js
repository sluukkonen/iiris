import { curry3 } from './internal/curry3'
import { clampU } from './internal/clampU'
import { setName } from './internal/setName'

export const clamp = setName(curry3(clampU), 'clamp')
