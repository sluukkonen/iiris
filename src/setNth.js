import { curry3 } from './curry3'
import { setNthU } from './internal/setNthU'
import { setName } from './internal/setName'

export const setNth = setName(curry3(setNthU), 'setNth')
