import { expectType } from 'tsd'
import * as I from '..'
import { User, user } from './index.test-d'

expectType<{}>(I.pick([], user))

expectType<Pick<User, 'age'>>(I.pick(['age'], user))
expectType<Pick<User, 'age'>>(I.pick(['age'])(user))

expectType<Pick<User, 'name'>>(I.pick(['name'], user))
expectType<Pick<User, 'name'>>(I.pick(['name'])(user))

expectType<Pick<User, 'age' | 'name'>>(I.pick(['age', 'name'], user))
expectType<Pick<User, 'age' | 'name'>>(I.pick(['age', 'name'])(user))
