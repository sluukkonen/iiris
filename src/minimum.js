import { minimumByU } from './internal/minimumByU'
import { identity } from './identity'

export const minimum = (array) => minimumByU(identity, array)
