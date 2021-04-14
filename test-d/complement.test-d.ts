import { expectType } from 'tsd'
import * as I from '..'
import * as A from '../array'

expectType<<T>(value: readonly T[]) => boolean>(I.complement(A.isEmpty))
