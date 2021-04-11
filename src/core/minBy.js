import { curry3 } from '../function/index.js'
import { minByU, setName } from './internal/index.js'

export const minBy = setName(curry3(minByU), 'minBy')
