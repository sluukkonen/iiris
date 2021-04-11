import { setName } from '../core/internal/index.js'
import { curry3 } from '../function/index.js'
import { nthSatisfiesU } from './internal/index.js'

export const nthSatisfies = setName(curry3(nthSatisfiesU), 'nthSatisfies')
