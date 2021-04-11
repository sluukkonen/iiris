import { setName } from '../core/internal/index.js'
import { curry3 } from '../function/index.js'
import { reduceRightU } from './internal/index.js'

export const reduceRight = setName(curry3(reduceRightU), 'reduceRight')
