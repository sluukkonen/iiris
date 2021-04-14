import { setName } from '../internal/setName.js'
import { curry2 } from '../curry2.js'
import { flattenU } from './internal/flattenU.js'

export const flatten = setName(curry2(flattenU), 'flatten')
