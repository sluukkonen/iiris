# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

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

## [0.0.1] - 2021-04-06

- Initial public release
