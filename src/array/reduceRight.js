import { setName } from '../internal/setName.js'
import { curry3 } from '../curry3.js'
import { reduceRightU } from './internal/reduceRightU.js'

export const reduceRight = setName(curry3(reduceRightU), 'reduceRight')
