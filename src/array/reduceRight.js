import { setName } from '../core/internal/setName.js'
import { curry3 } from '../function/curry3.js'
import { reduceRightU } from './internal/reduceRightU.js'

export const reduceRight = setName(curry3(reduceRightU), 'reduceRight')
