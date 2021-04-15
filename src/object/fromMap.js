import { entries } from '../map/entries.js'
import { fromEntries } from './fromEntries.js'

export const fromMap = (map) => fromEntries(entries(map))
