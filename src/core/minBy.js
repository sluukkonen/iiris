import { curry3 } from '../function/curry3.js'
import { minByU } from './internal/minByU.js'
import { setName } from './internal/setName.js'

export const minBy = setName(curry3(minByU), 'minBy')
