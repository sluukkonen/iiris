import { expectError, expectType } from 'tsd'
import * as O from '../object'
import { maybeUser, User, user } from './index.test-d'

expectType<Omit<User, 'name'>>(O.removeProp('name', user))
expectType<Omit<User, 'name'>>(O.removeProp('name')(user))
expectType<Omit<User, 'age'>>(O.removeProp('age', user))
expectType<Omit<User, 'age'>>(O.removeProp('age')(user))

// Invalid key
expectError(O.removeProp('foo', maybeUser))
expectError(O.removeProp('foo')(maybeUser))

// Nullable object
expectError(O.removeProp('age', maybeUser))
expectError(O.removeProp('age')(maybeUser))
