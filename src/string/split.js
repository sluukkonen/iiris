import { curry2 } from '../curry2.js'
import { setName } from '../internal/setName.js'

const splitU = (separator, string) => string.split(separator)

export const split = setName(curry2(splitU), 'split')
