import { constant } from '../constant'
import { modifyU } from './modifyU'

export const removeU = (key, object) => modifyU(key, constantUndefined, object)

const constantUndefined = constant(undefined)
