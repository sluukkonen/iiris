import { expectError, expectType } from 'tsd'
import * as O from '../object'
import { maybeUser, User, user } from './index.test-d'

expectType<Omit<User, 'name'>>(O.remove('name', user))
expectType<Omit<User, 'name'>>(O.remove('name')(user))
expectType<Omit<User, 'age'>>(O.remove('age', user))
expectType<Omit<User, 'age'>>(O.remove('age')(user))

// Invalid key
expectError(O.remove('foo', maybeUser))
expectError(O.remove('foo')(maybeUser))

// Nullable object
expectError(O.remove('age', maybeUser))
expectError(O.remove('age')(maybeUser))
