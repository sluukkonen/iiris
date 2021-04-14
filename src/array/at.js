import { setName } from '../core/internal/setName.js'
import { atOr } from './atOr.js'

export const at = setName(atOr(undefined), 'at')
