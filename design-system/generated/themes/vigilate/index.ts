import type { Theme } from '../../../src/types/types.js'
import { colors as dark1Colors } from './colors.dark1.js'
import { colors as dark2Colors } from './colors.dark2.js'
import { colors as light1Colors } from './colors.light1.js'
import { colors as light2Colors } from './colors.light2.js'
import { colors as light3Colors } from './colors.light3.js'
import { palette } from './palette.js'

export const theme: Theme = {
  id: 'vigilate',
  name: 'Vigilate',
  palette,
  light1: light1Colors,
  light2: light2Colors,
  light3: light3Colors,
  dark1: dark1Colors,
  dark2: dark2Colors,
}
