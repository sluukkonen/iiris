import { expectType } from 'tsd'
import * as I from '..'
import { User, user } from './index.test-d'

const fn = I.curry2((user: User, name: string): User => ({ ...user, name }))

expectType<User>(fn(user, ''))
expectType<User>(fn(user)(''))
