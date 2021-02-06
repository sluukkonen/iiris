import { curry3 } from './curry3'
import { setName } from './internal/setName'
import { setU } from './internal/setU'

export const set = setName(curry3(setU), 'set')
