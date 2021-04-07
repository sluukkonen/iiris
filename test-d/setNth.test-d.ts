import { expectError, expectType } from 'tsd'
import * as I from '..'
import { maybeUser, User, user, users } from './index.test-d'

expectType<User[]>(I.setNth(0, user, users))
expectType<User[]>(I.setNth(0, user)(users))
expectType<User[]>(I.setNth(0)(user, users))
expectType<User[]>(I.setNth(0)(user)(users))

// Optional new value
expectType<User[]>(I.setNth(0, maybeUser, users))
expectType<User[]>(I.setNth(0, maybeUser)(users))
expectType<User[]>(I.setNth(0)(maybeUser, users))
expectType<User[]>(I.setNth(0)(maybeUser)(users))

// Wrong type
expectError(I.setNth(0, true, users))
expectError(I.setNth(0, true)(users))
expectError(I.setNth(0)(true, users))
expectError(I.setNth(0)(true)(users))
