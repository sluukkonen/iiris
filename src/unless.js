import { curry3 } from './internal/curry3'
import { setName } from './internal/setName'
import { unlessU } from './internal/unlessU'

export const unless = setName(curry3(unlessU), 'unless')
