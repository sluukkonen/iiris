import { curry3 } from './curry3'
import { setName } from './internal/setName'
import { unionWithU } from './internal/unionWithU'

export const unionWith = setName(curry3(unionWithU), 'unionWith')
