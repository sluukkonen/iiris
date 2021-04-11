import { setName } from '../core/internal/index.js'
import { identity } from '../function/index.js'
import { sumBy } from './sumBy.js'

export const sum = setName(sumBy(identity), 'sum')
