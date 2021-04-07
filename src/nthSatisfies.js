import { setName } from './internal/setName'
import { curry3 } from './curry3'
import { nthSatisfiesU } from './internal/nthSatiesfiesU'

export const nthSatisfies = setName(curry3(nthSatisfiesU), 'nthSatisfies')
