import { pairU } from './internal/pairU'
import { setName } from './internal/setName'
import { zipWith } from './zipWith'

export const zip = setName(zipWith(pairU), 'zip')
