import { expectType } from 'tsd'
import * as O from '../object'
import { user } from './index.test-d'

// Normal value
expectType<boolean>(O.propEquals('name', '', user))
expectType<boolean>(O.propEquals('name', '')(user))
expectType<boolean>(O.propEquals('name')('', user))
expectType<boolean>(O.propEquals('name')('')(user))

// Nullable value
expectType<boolean>(O.propEquals('age', 0, user))
expectType<boolean>(O.propEquals('age', 0)(user))
expectType<boolean>(O.propEquals('age', 0)(user))
expectType<boolean>(O.propEquals('age')(0)(user))
