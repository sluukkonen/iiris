import { modifyPropU } from './modifyPropU'
import { constant } from '../constant'

export const setPropU = (key, value, object) =>
  modifyPropU(key, constant(value), object)
