import { equalsU, setName } from '../core/internal/index.js'

import { unionWith } from './unionWith.js'

export const union = setName(unionWith(equalsU), 'union')
