import { setName } from '../core/internal/index.js'
import { nthOr } from './nthOr.js'

export const nth = setName(nthOr(undefined), 'nth')
