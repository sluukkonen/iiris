import { curry2 } from '../curry2.js'
import { setName } from '../internal/setName.js'
import { flattenTo } from './internal/flattenTo.js'

const flattenU = (depth, array) => flattenTo(depth, array, [])

export const flatten = setName(curry2(flattenU), 'flatten')
