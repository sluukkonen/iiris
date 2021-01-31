import { expectError, expectType } from 'tsd'

import * as S from '..'
import { User, user, users } from './index.test-d'

/// Objects

// Normal field
expectType<User>(S.set('name', '', user))
expectType<User>(S.set('name', '')(user))
expectType<User>(S.set('name')('', user))
expectType<User>(S.set('name')('')(user))

// Optional field
expectType<User>(S.set('age', 0, user))
expectType<User>(S.set('age', 0)(user))
expectType<User>(S.set('age')(0, user))
expectType<User>(S.set('age')(0)(user))

// Removing normal field
expectType<Omit<User, 'name'>>(S.set('name', undefined, user))
expectType<Omit<User, 'name'>>(S.set('name', undefined)(user))
expectType<Omit<User, 'name'>>(S.set('name')(undefined, user))
expectType<Omit<User, 'name'>>(S.set('name')(undefined)(user))

// Removing optional field
expectType<User>(S.set('age', undefined, user))
expectType<User>(S.set('age', undefined)(user))
expectType<User>(S.set('age')(undefined, user))
expectType<User>(S.set('age')(undefined)(user))

// Adding a new field
expectType<User & { new: true }>(S.set('new', true, user))
expectType<User & { new: boolean }>(S.set('new', true)(user))
expectType<User & { new: true }>(S.set('new')(true, user))
expectType<User & { new: boolean }>(S.set('new')(true)(user))

// Changing the type of a field
expectType<Omit<User, 'age'> & { age: string }>(S.set('age', 'too old', user))
expectType<Omit<User, 'age'> & { age: string }>(S.set('age', 'too old')(user))
expectType<Omit<User, 'age'> & { age: string }>(S.set('age')('too old', user))
expectType<Omit<User, 'age'> & { age: string }>(S.set('age')('too old')(user))

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
