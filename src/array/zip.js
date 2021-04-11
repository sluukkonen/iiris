import { setName } from '../core/internal/index.js'
import { zipWith } from './zipWith.js'

export const zip = setName(
  zipWith((a, b) => [a, b]),
  'zip'
)
