import { setName } from '../core/internal/index.js'
import { curry3 } from '../function/index.js'
import { getOrU } from './internal/index.js'

export const getOr = setName(curry3(getOrU), 'getOr')
