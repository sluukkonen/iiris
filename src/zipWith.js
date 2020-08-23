import { curry3 } from './internal/curry3'
import { setName } from './internal/setName'
import { zipWithU } from './internal/zipWithU'

export const zipWith = setName(curry3(zipWithU), 'zipWith')
