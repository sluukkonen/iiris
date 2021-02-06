import { curry3 } from './curry3'
import { minByU } from './internal/minByU'
import { setName } from './internal/setName'

export const minBy = setName(curry3(minByU), 'minBy')
