import { setName } from '../core/internal/setName.js'
import { curry3 } from '../function/curry3.js'
import { getOrU } from './internal/getOrU.js'

export const getOr = setName(curry3(getOrU), 'getOr')
