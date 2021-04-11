import { setName } from '../core/internal/index.js'
import { atOr } from './atOr.js'

export const at = setName(atOr(undefined), 'at')
