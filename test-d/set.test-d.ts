import {
  expectAssignable,
  expectError,
  expectNotAssignable,
  expectType,
} from 'tsd'

import * as S from '..'
import { maybeUser, maybeUsers, User, user, users } from './index.test-d'

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

// Optional object
expectNotAssignable<User>(S.set('age', 0, maybeUser))
expectNotAssignable<User>(S.set('age', 0)(maybeUser))
expectNotAssignable<User>(S.set('age')(0, maybeUser))
expectNotAssignable<User>(S.set('age')(0)(maybeUser))

/// Arrays

// Normal array
expectType<User[]>(S.set(0, user, users))
expectType<User[]>(S.set(0, user)(users))
expectType<User[]>(S.set(0)(user, users))
expectType<User[]>(S.set(0)(user)(users))

// Optional array
expectType<User[]>(S.set(0, user, maybeUsers))
expectType<User[]>(S.set(0, user)(maybeUsers))
expectType<User[]>(S.set(0)(user, maybeUsers))
expectType<User[]>(S.set(0)(user)(maybeUsers))

// Null
expectType<User[]>(S.set(0, user, null))
expectType<User[]>(S.set(0, user)(null))
expectType<User[]>(S.set(0)(user, null))
expectType<User[]>(S.set(0)(user)(null))

// Wrong type
expectError(S.set(0, true, users))
expectError(S.set(0, true)(users))
expectError(S.set(0)(true, users))
expectError(S.set(0)(true)(users))
