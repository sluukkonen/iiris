import { identity } from './identity'
import { sumByU } from './internal/sumByU'

export const sum = (array) => sumByU(identity, array)
