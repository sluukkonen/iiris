import { setName } from './internal/setName'
import { propOr } from './propOr'

export const prop = setName(propOr(undefined), 'prop')
