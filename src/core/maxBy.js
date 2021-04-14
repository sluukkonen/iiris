import { curry3 } from '../function/curry3.js'
import { maxByU } from './internal/maxByU.js'
import { setName } from './internal/setName.js'

export const maxBy = setName(curry3(maxByU), 'maxBy')
