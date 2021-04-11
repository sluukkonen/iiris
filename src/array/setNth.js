import { setName } from '../core/internal/index.js'
import { curry3 } from '../function/index.js'
import { setNthU } from './internal/index.js'

export const setNth = setName(curry3(setNthU), 'setNth')
