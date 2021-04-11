import { equalsU, setName } from '../core/internal/index.js'
import { differenceWith } from './differenceWith.js'

export const difference = setName(differenceWith(equalsU), 'difference')
