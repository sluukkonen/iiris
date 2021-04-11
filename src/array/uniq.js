import { equalsU, setName } from '../core/internal/index.js'

import { uniqWith } from './uniqWith.js'

export const uniq = setName(uniqWith(equalsU), 'uniq')
