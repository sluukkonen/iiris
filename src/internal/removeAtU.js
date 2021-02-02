import { noop } from '../noop'
import { modifyAtU } from './modifyAtU'

export const removeAtU = (index, array) => modifyAtU(index, noop, array)
