import { curry3 } from './curry3.js'
import { equalsU } from './equals.js'
import { setName } from './internal/setName.js'

const equalsByU = (fn, a, b) => equalsU(fn(a), fn(b))

export const equalsBy = setName(curry3(equalsByU), 'equalsBy')
