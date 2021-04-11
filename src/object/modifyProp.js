import { setName } from '../core/internal/index.js'
import { curry3 } from '../function/index.js'
import { modifyPropU } from './internal/index.js'

export const modifyProp = setName(curry3(modifyPropU), 'modifyProp')
