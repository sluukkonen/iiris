import { expectError, expectType } from 'tsd'
import * as S from '..'
import { maybeUsers, User, users } from './index.test-d'

// Arrays
expectType<User[]>(S.removeAt(0, users))
expectType<User[]>(S.removeAt(0)(users))

// Nullable array
expectError(S.removeAt(0, maybeUsers))
expectError(S.removeAt(0)(maybeUsers))
