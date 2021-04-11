import { setName } from '../core/internal/index.js'
import { curry3 } from '../function/index.js'
import { nthOrU } from './internal/index.js'

export const nthOr = setName(curry3(nthOrU), 'nthOr')
