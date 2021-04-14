import { curry2 } from '../curry2.js'
import { setName } from '../internal/setName.js'

const getU = (key, object) => object[key]

export const get = setName(curry2(getU), 'get')
