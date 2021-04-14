import { setName } from '../internal/setName.js'
import { curry3 } from '../curry3.js'
import { modifyU } from './internal/modifyU.js'

export const modify = setName(curry3(modifyU), 'modify')
