import { expectError, expectType } from 'tsd'
import * as S from '..'
import { maybeUser, User, user } from './index.test-d'

expectType<Omit<User, 'name'>>(S.removeProp('name', user))
expectType<Omit<User, 'name'>>(S.removeProp('name')(user))
expectType<Omit<User, 'age'>>(S.removeProp('age', user))
expectType<Omit<User, 'age'>>(S.removeProp('age')(user))

// Invalid key
expectError(S.removeProp('foo', maybeUser))
expectError(S.removeProp('foo')(maybeUser))

// Nullable object
expectError(S.removeProp('age', maybeUser))
expectError(S.removeProp('age')(maybeUser))
