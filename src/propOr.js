import { curry3 } from './curry3'
import { propOrU } from './internal/propOrU'
import { setName } from './internal/setName'

export const propOr = setName(curry3(propOrU), 'propOr')
