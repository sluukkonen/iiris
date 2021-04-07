import { curry3 } from './curry3'
import { modifyNthU } from './internal/modifyNthU'
import { setName } from './internal/setName'

export const modifyNth = setName(curry3(modifyNthU), 'modifyNth')
