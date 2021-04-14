import { curry2 } from '../curry2.js'
import { setName } from '../internal/setName.js'

const joinU = (separator, array) => array.join(separator)

export const join = setName(curry2(joinU), 'join')
