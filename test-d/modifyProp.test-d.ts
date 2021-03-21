import { expectError, expectType } from 'tsd'
import * as I from '..'
import { User, user } from './index.test-d'

const toUpper = (s: string) => s.toUpperCase()

// Normal field
expectType<Pick<User, 'age'> & { name: string }>(
  I.modifyProp('name', (n) => n.toUpperCase(), user)
)
expectType<Pick<User, 'age'> & { name: string }>(
  I.modifyProp('name', toUpper)(user)
)
expectType<Pick<User, 'age'> & { name: string }>(
  I.modifyProp('name')((n) => n.toUpperCase(), user)
)
expectType<Pick<User, 'age'> & { name: string }>(
  I.modifyProp('name')(toUpper)(user)
)

// Optional field
expectType<Pick<User, 'name'> & { age: number }>(
  I.modifyProp('age', (a) => (a === undefined ? 0 : a + 1), user)
)
expectType<Pick<User, 'name'> & { age: number }>(
  I.modifyProp('age', (a: number | undefined) => (a === undefined ? 0 : a + 1))(
    user
  )
)
expectType<Pick<User, 'name'> & { age: number }>(
  I.modifyProp('age')((a) => (a === undefined ? 0 : a + 1), user)
)
expectType<Pick<User, 'name'> & { age: number }>(
  I.modifyProp('age')((a: number | undefined) => (a === undefined ? 0 : a + 1))(
    user
  )
)

// Removing a field
expectType<Pick<User, 'name'>>(I.modifyProp('age', I.noop, user))
expectType<Pick<User, 'name'>>(I.modifyProp('age', I.noop)(user))
expectType<Pick<User, 'name'>>(I.modifyProp('age')(I.noop, user))
expectType<Pick<User, 'name'>>(I.modifyProp('age')(I.noop)(user))

// Mapping identity function over mandatory field
expectType<Pick<User, 'age'> & { name: string }>(
  I.modifyProp('name', I.identity, user)
)
expectType<Pick<User, 'age'> & { name: string }>(
  I.modifyProp('name', (a: string) => a)(user)
)
expectType<Pick<User, 'age'> & { name: string }>(
  I.modifyProp('name')(I.identity, user)
)
expectType<Pick<User, 'age'> & { name: string }>(
  I.modifyProp('name')((a: string) => a)(user)
)

// Mapping identity function over optional field
expectType<Pick<User, 'name'> & { age?: number }>(
  I.modifyProp('age', I.identity, user)
)
expectType<Pick<User, 'name'> & { age?: number }>(
  I.modifyProp('age', (a?: number) => a)(user)
)
expectType<Pick<User, 'name'> & { age?: number }>(
  I.modifyProp('age')(I.identity, user)
)
expectType<Pick<User, 'name'> & { age?: number }>(
  I.modifyProp('age')((a?: number) => a)(user)
)

// Adding a new field
// expectType<User & { new: boolean }>(I.modifyProp('new', T, user))
// expectType<User & { new: boolean }>(I.modifyProp('new', T)(user))
// expectType<User & { new: boolean }>(I.modifyProp('new')(T, user))
// expectType<User & { new: boolean }>(I.modifyProp('new')(T)(user))
// Changing the type of a field

expectType<Pick<User, 'name'> & { age: string }>(
  I.modifyProp('age', () => 'too old', user)
)
expectType<Pick<User, 'name'> & { age: string }>(
  I.modifyProp('age', () => 'too old')(user)
)
expectType<Pick<User, 'name'> & { age: string }>(
  I.modifyProp('age')(() => 'too old', user)
)
expectType<Pick<User, 'name'> & { age: string }>(
  I.modifyProp('age')(() => 'too old')(user)
)

// Wrong type of function
expectError(I.modifyProp('age', I.add(1), user))
expectError(I.modifyProp('age', I.add(1))(user))
expectError(I.modifyProp('age')(I.add(1), user))
expectError(I.modifyProp('age')(I.add(1))(user))
