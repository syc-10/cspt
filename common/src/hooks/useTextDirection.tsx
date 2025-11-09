import { useState, useEffect } from 'react'

import { logger } from '@tribeplatform/react-components/common'

const RTL_LANGUAGES = new Set(['ar', 'he', 'fa', 'ur', 'ps', 'sd', 'ug', 'yi'])
const RTL_UNICODE_REGEX = /[\u0590-\u08FF]/ // Hebrew, Arabic, Persian, Urdu, etc.

export const useTextDirection = (text: string) => {
  const [direction, setDirection] = useState<'rtl' | 'ltr'>('ltr')

  useEffect(() => {
    if (!text.trim()) {
      setDirection('ltr') // Default to LTR for empty text
      return
    }

    // 1️⃣ Step 1: Check Unicode Characters (Best Performance)
    if (RTL_UNICODE_REGEX.test(text)) {
      setDirection('rtl')
      return
    }

    // 2️⃣ Step 2: Use `Intl.Segmenter` (Best Accuracy)
    if ('Segmenter' in Intl) {
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const segmenter = new (Intl as any).Segmenter(undefined, {
          granularity: 'word',
        })
        const firstChar =
          segmenter.segment(text).next().value?.segment?.[0] ?? ''

        if (RTL_UNICODE_REGEX.test(firstChar)) {
          setDirection('rtl')
          return
        }
      } catch (error) {
        logger.warn('Intl.Segmenter is not supported:', error)
      }
    }

    // 3️⃣ Step 3: Check the Language (Less Reliable)
    if (typeof navigator !== 'undefined') {
      const userLang = navigator.language.split('-')[0]
      if (RTL_LANGUAGES.has(userLang)) {
        setDirection('rtl')
        return
      }
    }

    // Default to LTR
    setDirection('ltr')
  }, [text])

  return direction
}
