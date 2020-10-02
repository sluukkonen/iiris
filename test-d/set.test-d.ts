import { expectAssignable, expectError, expectType } from 'tsd'

import * as S from '..'
import { User, user, users } from './index.test-d'

/// Objects

// Normal field
expectAssignable<User>(S.set('name', '', user))
expectAssignable<User>(S.set('name', '')(user))
expectAssignable<User>(S.set('name')('', user))
expectAssignable<User>(S.set('name')('')(user))

// Optional field
expectAssignable<User>(S.set('age', 0, user))
expectAssignable<User>(S.set('age', 0)(user))
expectAssignable<User>(S.set('age')(0, user))
expectAssignable<User>(S.set('age')(0)(user))

// Adding a new field
expectType<User & { new: true }>(S.set('new', true, user))
expectType<User & { new: boolean }>(S.set('new', true)(user))
expectType<User & { new: true }>(S.set('new')(true, user))
expectType<User & { new: boolean }>(S.set('new')(true)(user))

// Changing the type of a field
expectAssignable<{ name: string; age: string }>(S.set('age', 'too old', user))
expectAssignable<{ name: string; age: string }>(S.set('age', 'too old')(user))
expectAssignable<{ name: string; age: string }>(S.set('age')('too old', user))
expectAssignable<{ name: string; age: string }>(S.set('age')('too old')(user))

/// Arrays

// Normal array
expectType<User[]>(S.set(0, user, users))
expectType<User[]>(S.set(0, user)(users))
expectType<User[]>(S.set(0)(user, users))
expectType<User[]>(S.set(0)(user)(users))

// Wrong type
expectError(S.set(0, true, users))
expectError(S.set(0, true)(users))
expectError(S.set(0)(true, users))
expectError(S.set(0)(true)(users))
