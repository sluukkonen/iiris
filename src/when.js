import { curry3 } from './curry3'
import { setName } from './internal/setName'
import { whenU } from './internal/whenU'

export const when = setName(curry3(whenU), 'when')
