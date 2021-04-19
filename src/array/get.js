import { setName } from '../internal/setName.js'
import { getOr } from './getOr.js'

export const get = setName(getOr(undefined), 'get')
