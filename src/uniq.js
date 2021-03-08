import { equalsU } from './internal/equalsU'
import { setName } from './internal/setName'
import { uniqWith } from './uniqWith'

export const uniq = setName(uniqWith(equalsU), 'uniq')
