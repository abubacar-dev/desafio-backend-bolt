export function buildRoutePath(path) {
    const routePramsRegexp = /:([a-zA-Z]+)/g
    const routePath = path.replaceAll(routePramsRegexp, '(?<$1>[a-zA-Z\-_]+)')
    const pathRegexp = new RegExp(`^${routePath}(?<query>\\?(.*))?$`)

    return pathRegexp
}