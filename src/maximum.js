import { identity } from './identity'
import { maximumByU } from './internal/maximumByU'

export const maximum = (array) => maximumByU(identity, array)
