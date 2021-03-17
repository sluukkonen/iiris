import { expectError, expectType } from 'tsd'
import * as I from '..'
import { maybeUser, User, user } from './index.test-d'

expectType<Omit<User, 'name'>>(I.removeProp('name', user))
expectType<Omit<User, 'name'>>(I.removeProp('name')(user))
expectType<Omit<User, 'age'>>(I.removeProp('age', user))
expectType<Omit<User, 'age'>>(I.removeProp('age')(user))

// Invalid key
expectError(I.removeProp('foo', maybeUser))
expectError(I.removeProp('foo')(maybeUser))

// Nullable object
expectError(I.removeProp('age', maybeUser))
expectError(I.removeProp('age')(maybeUser))
