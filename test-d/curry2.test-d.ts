import { expectType } from 'tsd'
import * as F from '../function'
import { User, user } from './index.test-d'

const fn = F.curry2((user: User, name: string): User => ({ ...user, name }))

expectType<User>(fn(user, ''))
expectType<User>(fn(user)(''))
