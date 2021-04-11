import { curry3 } from '../function/index.js'
import { equalsByU, setName } from './internal/index.js'

export const equalsBy = setName(curry3(equalsByU), 'equalsBy')
