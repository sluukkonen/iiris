import { curry3 } from './curry3'
import { setAtU } from './internal/setAtU'
import { setName } from './internal/setName'

export const setAt = setName(curry3(setAtU), 'setAt')
