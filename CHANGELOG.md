# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.1] - 2021-04-10

### Fixed

- The `HasKey<K, V>` helper type erroneously accepted types that didn't have
  the key `K`.
- The parameter order of `propEquals` and `nthEquals` wasn't actually changed in
  [#239](https://github.com/sluukkonen/iiris/pull/239). This is now fixed.

## [0.1.0] - 2021-04-07

### Changed

- Renamed various array-related functions to use `nth` as a base name instead of `at`. Full list of affected functions
  below. ([#236](https://github.com/sluukkonen/iiris/pull/236))

| Old name      | New name       |
| ------------- | -------------- |
| `at`          | `nth`          |
| `atOr`        | `nthOr`        |
| `setAt`       | `setNth`       |
| `modifyAt`    | `modifyNth`    |
| `removeAt`    | `removeNth`    |
| `atEquals`    | `nthEquals`    |
| `atSatisfies` | `nthSatisfies` |

- Changed the parameter order of `propEquals`, `propSatisfies`, `nthEquals` and `nthSatisfies`. Now the key or index is
  the first parameter while the value or predicate is the second
  parameter. ([#239](https://github.com/sluukkonen/iiris/pull/239))

## [0.0.1] - 2021-04-06

- Initial public release
