import { curry2 } from './internal/curry2'
import { setName } from './internal/setName'
import { zipU } from './internal/zipU'

export const zip = setName(curry2(zipU), 'zip')
