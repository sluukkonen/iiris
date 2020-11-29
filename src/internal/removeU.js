import { noop } from '../noop'
import { modifyU } from './modifyU'

export const removeU = (key, object) => modifyU(key, noop, object)
