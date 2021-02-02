import { curry3 } from './curry3'
import { modifyPropU } from './internal/modifyPropU'
import { setName } from './internal/setName'

export const modifyProp = setName(curry3(modifyPropU), 'modifyProp')
