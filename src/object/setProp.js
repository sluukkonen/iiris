import { setName } from '../core/internal/index.js'
import { curry3 } from '../function/index.js'
import { setPropU } from './internal/index.js'

export const setProp = setName(curry3(setPropU), 'setProp')
