import DeviceDetector from 'device-detector-js'

const isBrowser = typeof window !== 'undefined'
const deviceDetector = new DeviceDetector()
const userAgent = isBrowser ? navigator.userAgent : ''

export const isMacOS = () => {
  if (isBrowser) {
    const device = deviceDetector.parse(userAgent)
    return device.os?.name === 'Mac'
  }
  // Check for macOS in Node.js environment
  return undefined
}

// https://www.w3.org/TR/mediaqueries-4/#descdef-media-any-pointer
export const isTouchDevice = () => {
  if (!isBrowser) {
    return false
  }

  return window.matchMedia('(any-pointer: coarse)').matches
}
