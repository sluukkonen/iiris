import { setName } from '../internal/setName.js'
import { curry3 } from '../curry3.js'
import { setU } from './internal/setU.js'

export const set = setName(curry3(setU), 'set')
