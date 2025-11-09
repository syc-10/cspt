export const isInternalLink = (href: string) => {
  if (href.indexOf('?') === 0) {
    return true
  }
  if (href.indexOf('#') === 0) {
    return true
  }
  if (href.indexOf('/') === 0 && href.indexOf('//') !== 0) {
    return true
  }

  return false
}
