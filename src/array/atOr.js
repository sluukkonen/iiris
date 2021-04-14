import { setName } from '../core/internal/setName.js'
import { curry3 } from '../function/curry3.js'
import { atOrU } from './internal/atOrU.js'

export const atOr = setName(curry3(atOrU), 'atOr')
