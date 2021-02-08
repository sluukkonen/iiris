import { curry3 } from './curry3'
import { intersectionWithU } from './internal/intersectionWithU'
import { setName } from './internal/setName'

export const intersectionWith = setName(
  curry3(intersectionWithU),
  'intersectionWith'
)
