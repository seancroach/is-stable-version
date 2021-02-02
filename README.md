[ci-badge]: https://img.shields.io/github/workflow/status/seancroach/is-stable-version/CI?logo=github
[ci-url]: https://github.com/seancroach/is-stable-version/actions?query=workflow%3A%22CI%22
[npm-badge]: https://img.shields.io/npm/dt/is-stable-version?logo=npm
[npm-url]: https://www.npmjs.com/package/is-stable-version
[license-url]: https://github.com/seancroach/is-stable-version/blob/latest/LICENSE.md

# is-stable-version

[![CI Badge][ci-badge]][ci-url] [![NPM Badge][npm-badge]][npm-url]

_Utility function to see if a SemVer version isn't a prerelease._

## Installation

Install `is-stable-version` through `npm`:

```
$ npm install is-stable-version
```

## Usage

```ts
import isStableVersion from "is-stable-version";

isStableVersion("1.0.0"); //=> true
isStableVersion("1.0.0-alpha"); //=> false

isStableVersion("=v1.0.0"); //=> true
isStableVersion("=v1.0.0-alpha"); //=> false

isStableVersion(" = v 1.0.0"); //=> throws RangeError
isStableVersion(" = v 1.0.0", { loose: true }); //=> true

isStableVersion("1.0.0alpha"); //=> throws RangeError
isStableVersion("1.0.0alpha", { loose: true }); //=> false
```

## License

This package is available as open source under the terms of the [MIT License][license-url].
