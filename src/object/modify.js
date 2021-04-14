import { setName } from '../core/internal/setName.js'
import { curry3 } from '../function/curry3.js'
import { modifyU } from './internal/modifyU.js'

export const modify = setName(curry3(modifyU), 'modify')
