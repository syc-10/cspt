import { isMacOS } from '../user-agent/os-utils.js'

type KeyMapping = {
  [key: string]: {
    mac: string
    other: string
  }
}

const KEY_MAPPINGS: KeyMapping = {
  cmd: {
    mac: '⌘',
    other: 'Ctrl',
  },
  ctrl: {
    mac: '⌃',
    other: 'Ctrl',
  },
  alt: {
    mac: '⌥',
    other: 'Alt',
  },
  shift: {
    mac: '⇧',
    other: 'Shift',
  },
  enter: {
    mac: '↵',
    other: 'Enter',
  },
  backspace: {
    mac: '⌫',
    other: 'Backspace',
  },
  delete: {
    mac: '⌦',
    other: 'Delete',
  },
  escape: {
    mac: '⎋',
    other: 'Esc',
  },
}

/**
 * Returns the OS-specific label for a given key
 * @param key - The key to get the label for (e.g., 'cmd', 'ctrl', 'alt')
 * @returns The OS-specific label for the key
 */
export const getKeyLabel = (key: string): string => {
  const lowercaseKey = key.toLowerCase()
  const mapping = KEY_MAPPINGS[lowercaseKey]

  if (!mapping) {
    return key // Return original key if no mapping exists
  }

  return isMacOS() ? mapping.mac : mapping.other
}
