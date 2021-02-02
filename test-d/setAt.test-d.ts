import * as S from '..'
import { expectError, expectType } from 'tsd'
import { maybeUser, User, user, users } from './index.test-d'

expectType<User[]>(S.setAt(0, user, users))
expectType<User[]>(S.setAt(0, user)(users))
expectType<User[]>(S.setAt(0)(user, users))
expectType<User[]>(S.setAt(0)(user)(users))

// Optional new value
expectType<User[]>(S.setAt(0, maybeUser, users))
expectType<User[]>(S.setAt(0, maybeUser)(users))
expectType<User[]>(S.setAt(0)(maybeUser, users))
expectType<User[]>(S.setAt(0)(maybeUser)(users))

// Wrong type
expectError(S.setAt(0, true, users))
expectError(S.setAt(0, true)(users))
expectError(S.setAt(0)(true, users))
expectError(S.setAt(0)(true)(users))
