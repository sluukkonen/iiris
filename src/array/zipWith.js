import { setName } from '../core/internal/index.js'
import { curry3 } from '../function/index.js'
import { zipWithU } from './internal/index.js'

export const zipWith = setName(curry3(zipWithU), 'zipWith')
