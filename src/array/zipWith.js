import { setName } from '../core/internal/setName.js'
import { curry3 } from '../function/curry3.js'
import { zipWithU } from './internal/zipWithU.js'

export const zipWith = setName(curry3(zipWithU), 'zipWith')
