import { atOr } from './atOr'
import { setName } from './internal/setName'

export const at = setName(atOr(undefined), 'at')
