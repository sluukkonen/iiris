import { nthOr } from './nthOr'
import { setName } from './internal/setName'

export const nth = setName(nthOr(undefined), 'nth')
