import { constant } from '../constant'
import { modifyAtU } from './modifyAtU'

export const setAtU = (index, value, array) =>
  modifyAtU(index, constant(value), array)
