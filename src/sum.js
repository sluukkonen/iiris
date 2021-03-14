import { identity } from './identity'
import { setName } from './internal/setName'
import { sumBy } from './sumBy'

export const sum = setName(sumBy(identity), 'sum')
