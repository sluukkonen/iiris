import { setName } from '../core/internal/index.js'
import { curry3 } from '../function/index.js'
import { modifyNthU } from './internal/index.js'

export const modifyNth = setName(curry3(modifyNthU), 'modifyNth')
