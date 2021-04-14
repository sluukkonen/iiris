import { setName } from '../internal/setName.js'
import { identity } from '../identity.js'
import { sumBy } from './sumBy.js'

export const sum = setName(sumBy(identity), 'sum')
