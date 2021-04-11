import { setName } from '../core/internal/index.js'
import { curry3 } from '../function/index.js'
import { unionWithU } from './internal/index.js'

export const unionWith = setName(curry3(unionWithU), 'unionWith')
