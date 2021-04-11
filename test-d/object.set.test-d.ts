import { expectError, expectType } from 'tsd'
import * as O from '../object'
import { User, user } from './index.test-d'

// Normal field
expectType<User>(O.set('name', '', user))
expectType<User>(O.set('name', '')(user))
expectType<User>(O.set('name')('', user))
expectType<User>(O.set('name')('')(user))

// Optional field
expectType<User>(O.set('age', 0, user))
expectType<User>(O.set('age', 0)(user))
expectType<User>(O.set('age')(0, user))
expectType<User>(O.set('age')(0)(user))

// Removing a normal field
expectError(O.set('name', undefined, user))
expectError(O.set('name', undefined)(user))
expectError(O.set('name')(undefined, user))
expectError(O.set('name')(undefined)(user))

// Removing an optional field
expectType<User>(O.set('age', undefined, user))
expectType<User>(O.set('age', undefined as number | undefined)(user))
expectType<User>(O.set('age')(undefined, user))
expectType<User>(O.set('age')(undefined as number | undefined)(user))

// Adding a new field
expectError(O.set('new', true, user))
// TODO: Uncomment when tsd supports "X has no properties common with Y"
// expectError(I.setProp('new', true)(user))
// expectError(I.setProp('new')(true, user))
// expectError(I.setProp('new')(true)(user))

// Changing the type of a field
expectError(O.set('age', 'too old', user))
expectError(O.set('age', 'too old')(user))
expectError(O.set('age')('too old', user))
expectError(O.set('age')('too old')(user))
