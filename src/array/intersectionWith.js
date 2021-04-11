import { setName } from '../core/internal/index.js'
import { curry3 } from '../function/index.js'
import { intersectionWithU } from './internal/index.js'

export const intersectionWith = setName(
  curry3(intersectionWithU),
  'intersectionWith'
)
