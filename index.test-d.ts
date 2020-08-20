// Just try to import the module for now.
import * as S from '.'

S.seq(
  [1, 2, 3],
  S.map((x) => x + 1),
  S.dropWhile(S.gt(1)),
  S.reduce((a, b) => a + b, 0)
)
