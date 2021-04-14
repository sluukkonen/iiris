import { setName } from '../internal/setName.js'
import { curry3 } from '../curry3.js'
import { atOrU } from './internal/atOrU.js'

export const atOr = setName(curry3(atOrU), 'atOr')
