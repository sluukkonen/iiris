import { curry2 } from './internal/curry2'
import { flattenU } from './internal/flattenU'
import { setName } from './internal/setName'

export const flatten = setName(curry2(flattenU), 'flatten')
