import { curry3 } from './curry3'
import { modifyAtU } from './internal/modifyAtU'
import { setName } from './internal/setName'

export const modifyAt = setName(curry3(modifyAtU), 'modifyAt')
