import { expectType } from 'tsd'
import * as O from '../object'
import { User, user } from './index.test-d'

expectType<{}>(O.pick([], user))

expectType<Pick<User, 'age'>>(O.pick(['age'], user))
expectType<Pick<User, 'age'>>(O.pick(['age'])(user))

expectType<Pick<User, 'name'>>(O.pick(['name'], user))
expectType<Pick<User, 'name'>>(O.pick(['name'])(user))

expectType<Pick<User, 'age' | 'name'>>(O.pick(['age', 'name'], user))
expectType<Pick<User, 'age' | 'name'>>(O.pick(['age', 'name'])(user))
