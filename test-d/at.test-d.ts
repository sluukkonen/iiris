import { expectType } from 'tsd'
import * as I from '..'
import { User, users } from './index.test-d'

// Array
expectType<User | undefined>(I.at(0, users))
expectType<User | undefined>(I.at(0)(users))
