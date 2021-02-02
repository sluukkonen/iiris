import { expectError, expectType } from 'tsd'
import * as S from '..'
import { User, user, users } from './index.test-d'

// Normal array
expectType<User[]>(S.modifyAt(0, () => user, users))
expectType<User[]>(S.modifyAt(0, () => user)(users))
expectType<User[]>(S.modifyAt(0)(() => user, users))
expectType<User[]>(S.modifyAt(0)(() => user)(users))

// Wrong type
expectError(S.modifyAt(0, () => true, users))
expectError(S.modifyAt(0, () => true)(users))
expectError(S.modifyAt(0)(() => true, users))
expectError(S.modifyAt(0)(() => true)(users))
