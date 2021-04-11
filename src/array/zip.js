import { setName } from '../core/internal/index.js'
import { pairU } from './internal/index.js'
import { zipWith } from './zipWith.js'

export const zip = setName(zipWith(pairU), 'zip')
