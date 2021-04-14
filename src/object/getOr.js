import { setName } from '../internal/setName.js'
import { curry3 } from '../curry3.js'
import { getOrU } from './internal/getOrU.js'

export const getOr = setName(curry3(getOrU), 'getOr')
