import { curry3 } from './internal/curry3'
import { reduceRightU } from './internal/reduceRightU'
import { setName } from './internal/setName'

export const reduceRight = setName(curry3(reduceRightU), 'reduceRight')
