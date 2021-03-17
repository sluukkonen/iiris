import { expectError, expectType } from 'tsd'
import * as I from '..'
import { User, user } from './index.test-d'

const toUpper = (s: string) => s.toUpperCase()

// Normal field
expectType<User>(I.modifyProp('name', (n) => n.toUpperCase(), user))
expectType<User>(I.modifyProp('name', toUpper)(user))
expectType<User>(I.modifyProp('name')((n) => n.toUpperCase(), user))
expectType<User>(I.modifyProp('name')(toUpper)(user))

// Optional field
expectType<User>(
  I.modifyProp('age', (a) => (a === undefined ? 0 : a + 1), user)
)
expectType<User>(
  I.modifyProp('age', (a: number | undefined) => (a === undefined ? 0 : +1))(
    user
  )
)
expectType<User>(
  I.modifyProp('age')((a) => (a === undefined ? 0 : a + 1), user)
)
expectType<User>(
  I.modifyProp('age')((a: number | undefined) => (a === undefined ? 0 : a + 1))(
    user
  )
)

// Removing a field
expectType<User>(I.modifyProp('age', I.noop, user))
expectType<User>(I.modifyProp('age', I.noop)(user))
expectType<User>(I.modifyProp('age')(I.noop, user))
expectType<User>(I.modifyProp('age')(I.noop)(user))

// Mapping identity function over mandatory field
expectType<User>(I.modifyProp('name', I.identity, user))
expectType<User>(I.modifyProp('name', (a: string) => a)(user))
expectType<User>(I.modifyProp('name')(I.identity, user))
expectType<User>(I.modifyProp('name')((a: string) => a)(user))

// Mapping identity function over optional field
expectType<User>(I.modifyProp('age', I.identity, user))
expectType<User>(I.modifyProp('age', (a?: number) => a)(user))
expectType<User>(I.modifyProp('age')(I.identity, user))
expectType<User>(I.modifyProp('age')((a?: number) => a)(user))

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
