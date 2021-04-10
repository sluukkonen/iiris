import * as I from '../index'
import { user } from './index.test-d'
import { expectType } from 'tsd'

// Normal value
expectType<boolean>(I.propEquals('name', '', user))
expectType<boolean>(I.propEquals('name', '')(user))
expectType<boolean>(I.propEquals('name')('', user))
expectType<boolean>(I.propEquals('name')('')(user))

// Nullable value
expectType<boolean>(I.propEquals('age', 0, user))
expectType<boolean>(I.propEquals('age', 0)(user))
expectType<boolean>(I.propEquals('age', 0)(user))
expectType<boolean>(I.propEquals('age')(0)(user))
