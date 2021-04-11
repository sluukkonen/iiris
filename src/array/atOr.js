import { setName } from '../core/internal/index.js'
import { curry3 } from '../function/index.js'
import { atOrU } from './internal/index.js'

export const atOr = setName(curry3(atOrU), 'atOr')
