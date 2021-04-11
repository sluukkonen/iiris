import { setName } from '../core/internal/index.js'
import { curry3 } from '../function/index.js'
import { modifyU } from './internal/index.js'

export const modify = setName(curry3(modifyU), 'modify')
