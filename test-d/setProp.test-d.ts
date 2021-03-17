import { expectType } from 'tsd'
import * as I from '..'
import { User, user } from './index.test-d'

// Normal field
expectType<User>(I.setProp('name', '', user))
expectType<User>(I.setProp('name', '')(user))
expectType<User>(I.setProp('name')('', user))
expectType<User>(I.setProp('name')('')(user))

// Optional field
expectType<User>(I.setProp('age', 0, user))
expectType<User>(I.setProp('age', 0)(user))
expectType<User>(I.setProp('age')(0, user))
expectType<User>(I.setProp('age')(0)(user))

// Removing normal field
expectType<Omit<User, 'name'>>(I.setProp('name', undefined, user))
expectType<Omit<User, 'name'>>(I.setProp('name', undefined)(user))
expectType<Omit<User, 'name'>>(I.setProp('name')(undefined, user))
expectType<Omit<User, 'name'>>(I.setProp('name')(undefined)(user))

// Removing optional field
expectType<User>(I.setProp('age', undefined, user))
expectType<User>(I.setProp('age', undefined)(user))
expectType<User>(I.setProp('age')(undefined, user))
expectType<User>(I.setProp('age')(undefined)(user))

// Adding a new field
expectType<User & { new: true }>(I.setProp('new', true, user))
expectType<User & { new: boolean }>(I.setProp('new', true)(user))
expectType<User & { new: true }>(I.setProp('new')(true, user))
expectType<User & { new: boolean }>(I.setProp('new')(true)(user))

// Changing the type of a field
expectType<Omit<User, 'age'> & { age: string }>(
  I.setProp('age', 'too old', user)
)
expectType<Omit<User, 'age'> & { age: string }>(
  I.setProp('age', 'too old')(user)
)
expectType<Omit<User, 'age'> & { age: string }>(
  I.setProp('age')('too old', user)
)
expectType<Omit<User, 'age'> & { age: string }>(
  I.setProp('age')('too old')(user)
)
