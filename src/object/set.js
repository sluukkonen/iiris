import { setName } from '../core/internal/index.js'
import { curry3 } from '../function/index.js'
import { setU } from './internal/index.js'

export const set = setName(curry3(setU), 'set')
