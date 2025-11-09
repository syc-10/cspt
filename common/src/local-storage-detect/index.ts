/**
 * Inspired by https://github.com/Modernizr/Modernizr/blob/master/feature-detects/storage/localstorage.js
 */

let localStorageEnabled = null

export function hasLocalStorage() {
  if (localStorageEnabled !== null) {
    return localStorageEnabled
  }

  const hasWindow = typeof window !== 'undefined'
  if (!hasWindow) {
    localStorageEnabled = false
    return localStorageEnabled
  }

  const test = 'test'
  try {
    localStorage.setItem(test, test)
    localStorage.removeItem(test)
    localStorageEnabled = true
  } catch (e) {
    localStorageEnabled = false
  }

  return localStorageEnabled
}
