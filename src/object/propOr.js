import { setName } from '../core/internal/index.js'
import { curry3 } from '../function/index.js'
import { propOrU } from './internal/index.js'

export const propOr = setName(curry3(propOrU), 'propOr')
