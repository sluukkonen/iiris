import { setName } from '../internal/setName.js'
import { zipWith } from './zipWith.js'

export const zip = setName(
  zipWith((a, b) => [a, b]),
  'zip'
)
