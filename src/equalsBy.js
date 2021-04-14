import { curry3 } from './curry3.js'
import { equalsByU } from './internal/equalsByU.js'
import { setName } from './internal/setName.js'

export const equalsBy = setName(curry3(equalsByU), 'equalsBy')
