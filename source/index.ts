import * as semver from "semver";

/**
 * Options used by the `isStableVersion` function.
 */
export interface IsStableVersionOptions {
  /**
   * If the `version` is not strictly invalid and `loose` is equal to `true`,
   * `isStableVersion` will try to convert `vers`ion to a valid SemVer version.
   */
  readonly loose?: boolean;
}

/**
 * `isStableVersion` will return `true` if the given SemVer `version` is a stable
 * release; `false` if the given `version` is a prerelease.
 */
export function isStableVersion(
  version: string,
  options: IsStableVersionOptions = {}
): boolean {
  const cleanVersion = semver.clean(version, options);

  if (cleanVersion === null) {
    const message = options.loose
      ? `${version} could not be turned into a valid SemVer.`
      : `"${version}" is not a valid SemVer. Perhaps call "isStableVersion" with the loose option set to true?`;
    throw new RangeError(message);
  }

  const prereleaseComponents = semver.prerelease(cleanVersion);
  return prereleaseComponents === null;
}

export default isStableVersion;
