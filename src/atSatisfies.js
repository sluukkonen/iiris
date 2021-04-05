import { setName } from './internal/setName'
import { curry3 } from './curry3'
import { atSatisfiesU } from './internal/atSatiesfiesU'

export const atSatisfies = setName(curry3(atSatisfiesU), 'atSatisfies')
