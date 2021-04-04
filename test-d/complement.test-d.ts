import * as I from '..'
import { expectType } from 'tsd'

expectType<<T>(value: readonly T[]) => boolean>(I.complement(I.isEmpty))
