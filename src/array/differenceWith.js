import { setName } from '../core/internal/index.js'
import { curry3 } from '../function/index.js'
import { differenceWithU } from './internal/index.js'

export const differenceWith = setName(curry3(differenceWithU), 'differenceWith')
