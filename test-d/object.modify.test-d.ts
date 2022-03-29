import { expectError, expectType } from 'tsd'
import * as I from '..'
import * as O from '../object'
import * as T from '../text'
import { User, user } from './index.test-d'

const toUpper = (s: string) => s.toUpperCase()

// Normal field
expectType<User>(O.modify('name', (n) => n.toUpperCase(), user))
expectType<User>(O.modify('name', toUpper)(user))
expectType<User>(O.modify('name')((n) => n.toUpperCase(), user))
expectType<User>(O.modify('name')(toUpper)(user))

// Optional field
expectType<User>(O.modify('age', I.inc, user))
expectType<User>(O.modify('age', I.inc)(user))
expectType<User>(O.modify('age')(I.inc, user))
expectType<User>(O.modify('age')(I.inc)(user))

// Removing a normal field
expectError(O.modify('name', I.noop, user))
expectError(O.modify('name', I.noop)(user))
expectError(O.modify('name')(I.noop, user))
expectError(O.modify('name')(I.noop)(user))

// Removing an optional field
expectType<User>(O.modify('age', I.noop, user))
expectError(O.modify('age', I.noop)(user)) // Not ideal, but can use removeProp instead
expectType<User>(O.modify('age')(I.noop, user))
expectError(O.modify('age')(I.noop)(user)) // Not ideal, but can use removeProp instead

// Identity function over mandatory field
expectType<User>(O.modify('name', I.identity, user))
expectType<User>(O.modify('name', I.identity)(user))
expectType<User>(O.modify('name')(I.identity, user))
expectType<User>(O.modify('name')(I.identity)(user))

// Identity function over optional field
expectType<User>(O.modify('age', I.identity, user))
expectType<User>(O.modify('age', I.identity)(user))
expectType<User>(O.modify('age')(I.identity, user))
expectType<User>(O.modify('age')(I.identity)(user))

// Adding a new field
expectError(O.modify('new', I.constant(1), user))
// TODO: uncomment when tsd supports "X has no properties in common with Y"
// expectError(I.modifyProp('new', I.constant(1))(user))
// expectError(I.modifyProp('new')(I.constant(1), user))
// expectError(I.modifyProp('new')(I.constant(1))(user))

// Changing the type of a field
expectError(O.modify('age', () => 'too old', user))
expectError(O.modify('age', () => 'too old')(user))
expectError(O.modify('age')(() => 'too old', user))
expectError(O.modify('age')(() => 'too old')(user))

// Wrong type of function
expectError(O.modify('age', T.toUpperCase, user))
expectError(O.modify('age', T.toUpperCase)(user))
expectError(O.modify('age')(T.toUpperCase)(user))
expectError(O.modify('age')(T.toUpperCase)(user))
