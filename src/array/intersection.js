import { equalsU, setName } from '../core/internal/index.js'

import { intersectionWith } from './intersectionWith.js'

export const intersection = setName(intersectionWith(equalsU), 'intersection')
