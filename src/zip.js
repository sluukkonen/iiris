import { setName } from './internal/setName'
import { zipWith } from './zipWith'
import { pairU } from './internal/pairU'

export const zip = setName(zipWith(pairU), 'zip')
