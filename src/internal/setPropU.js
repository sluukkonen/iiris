import { constant } from '../constant'
import { modifyPropU } from './modifyPropU'

export const setPropU = (key, value, object) =>
  modifyPropU(key, constant(value), object)
