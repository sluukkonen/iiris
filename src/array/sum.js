import { setName } from '../core/internal/setName.js'
import { identity } from '../function/identity.js'
import { sumBy } from './sumBy.js'

export const sum = setName(sumBy(identity), 'sum')
