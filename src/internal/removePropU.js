import { noop } from '../noop'
import { modifyPropU } from './modifyPropU'

export const removePropU = (key, object) => modifyPropU(key, noop, object)
