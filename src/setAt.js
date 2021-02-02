import { curry3 } from './curry3'
import { setName } from './internal/setName'
import { setAtU } from './internal/setAtU'

export const setAt = setName(curry3(setAtU), 'setAt')
