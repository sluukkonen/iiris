import { expectError, expectType } from 'tsd'
import * as F from '../function'
import * as M from '../math'
import * as O from '../object'
import * as S from '../string'
import { User, user } from './index.test-d'

const toUpper = (s: string) => s.toUpperCase()

// Normal field
expectType<User>(O.modifyProp('name', (n) => n.toUpperCase(), user))
expectType<User>(O.modifyProp('name', toUpper)(user))
expectType<User>(O.modifyProp('name')((n) => n.toUpperCase(), user))
expectType<User>(O.modifyProp('name')(toUpper)(user))

// Optional field
expectType<User>(O.modifyProp('age', M.inc, user))
expectType<User>(O.modifyProp('age', M.inc)(user))
expectType<User>(O.modifyProp('age')(M.inc, user))
expectType<User>(O.modifyProp('age')(M.inc)(user))

// Removing a normal field
expectError(O.modifyProp('name', F.noop, user))
expectError(O.modifyProp('name', F.noop)(user))
expectError(O.modifyProp('name')(F.noop, user))
expectError(O.modifyProp('name')(F.noop)(user))

// Removing an optional field
expectType<User>(O.modifyProp('age', F.noop, user))
expectError(O.modifyProp('age', F.noop)(user)) // Not ideal, but can use removeProp instead
expectType<User>(O.modifyProp('age')(F.noop, user))
expectError(O.modifyProp('age')(F.noop)(user)) // Not ideal, but can use removeProp instead

// Identity function over mandatory field
expectType<User>(O.modifyProp('name', F.identity, user))
expectType<User>(O.modifyProp('name', F.identity)(user))
expectType<User>(O.modifyProp('name')(F.identity, user))
expectType<User>(O.modifyProp('name')(F.identity)(user))

// Identity function over optional field
expectType<User>(O.modifyProp('age', F.identity, user))
expectType<User>(O.modifyProp('age', F.identity)(user))
expectType<User>(O.modifyProp('age')(F.identity, user))
expectType<User>(O.modifyProp('age')(F.identity)(user))

// Adding a new field
expectError(O.modifyProp('new', F.constant(1), user))
// TODO: uncomment when tsd supports "X has no properties in common with Y"
// expectError(I.modifyProp('new', I.constant(1))(user))
// expectError(I.modifyProp('new')(I.constant(1), user))
// expectError(I.modifyProp('new')(I.constant(1))(user))

// Changing the type of a field
expectError(O.modifyProp('age', () => 'too old', user))
expectError(O.modifyProp('age', () => 'too old')(user))
expectError(O.modifyProp('age')(() => 'too old', user))
expectError(O.modifyProp('age')(() => 'too old')(user))

// Wrong type of function
expectError(O.modifyProp('age', S.toUpperCase, user))
expectError(O.modifyProp('age', S.toUpperCase)(user))
expectError(O.modifyProp('age')(S.toUpperCase)(user))
expectError(O.modifyProp('age')(S.toUpperCase)(user))
