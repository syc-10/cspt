/**
 * Extracted from:
 * https://github.com/remix-run/react-router/blob/v5.3.4/packages/react-router/modules/matchPath.js
 */
import { pathToRegexp } from 'path-to-regexp'
import type { PathMatch } from 'react-router'

export interface MatchPathOptions {
  path?: string | readonly string[] | undefined
  exact?: boolean | undefined
  sensitive?: boolean | undefined
  strict?: boolean | undefined
}
export interface match<
  Params extends { [K in keyof Params]?: string } = object,
> {
  params: Params
  isExact: boolean
  path: string
  url: string
}

const cache = {}
const cacheLimit = 10000
let cacheCount = 0

function compilePath(path: string, options: MatchPathOptions) {
  const cacheKey = `${options.strict}${options.sensitive}`
  const pathCache = cache[cacheKey] || (cache[cacheKey] = {})

  if (pathCache[path]) {
    return pathCache[path]
  }

  const keys = []
  const regexp = pathToRegexp(path, keys, options)
  const result = { regexp, keys }

  if (cacheCount < cacheLimit) {
    pathCache[path] = result
    cacheCount += 1
  }

  return result
}

/**
 * The new matchPath function from react-router v6 does not
 * handle regex and complex wildcard paths. As result, it won't be
 * able to match the compound space paths where the space slugs could include
 * additional slashes. This method is a copy of the legacy matchPath that enables
 * us migrate to the new version of react-router without breaking the existing functionality.
 */
export function legacyMatchPath<
  Params extends { [K in keyof Params]?: string },
>(
  pathname: string,
  options: string | string[] | MatchPathOptions,
): match<Params> | null {
  if (typeof options === 'string' || Array.isArray(options)) {
    options = { path: options }
  }

  const { path, exact = false, strict = false, sensitive = false } = options

  const paths = [].concat(path)

  return paths.reduce((matched, path) => {
    if (!path && path !== '') {
      return null
    }
    if (matched) {
      return matched
    }

    const { regexp, keys } = compilePath(path, {
      exact,
      strict,
      sensitive,
    })
    const match = regexp.exec(pathname)

    if (!match) {
      return null
    }

    const [url, ...values] = match
    const isExact = pathname === url

    if (exact && !isExact) {
      return null
    }

    return {
      path, // the path used to match
      url: path === '/' && url === '' ? '/' : url, // the matched portion of the URL
      isExact, // whether or not we matched exactly
      params: keys.reduce((memo, key, index) => {
        memo[key.name] = values[index]
        return memo
      }, {}),
    }
  }, null)
}

export function convertLegacyMatchToPathMatch(match: match): PathMatch<string> {
  return {
    params: match.params as any,
    pathname: match.url,
    pathnameBase: '',
    pattern: {
      path: match.path,
      caseSensitive: true,
      end: match.isExact,
    },
  }
}
