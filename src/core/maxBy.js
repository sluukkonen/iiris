import { curry3 } from '../function/index.js'
import { maxByU, setName } from './internal/index.js'

export const maxBy = setName(curry3(maxByU), 'maxBy')
