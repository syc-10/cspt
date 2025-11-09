import { CUSTOMIZER_SCROLL_TOP_OFFSET } from './constants.js'

interface Params {
  headerHeightString: string
  element: HTMLElement
  document: Document
}

export const customizerPreviewScrollTo = ({
  headerHeightString,
  element,
  document,
}: Params) => {
  const headerHeightNumber = Number.parseInt(headerHeightString || '0', 10)
  const headerHeight = Number.isNaN(headerHeightNumber) ? 0 : headerHeightNumber
  const offset = CUSTOMIZER_SCROLL_TOP_OFFSET + Math.floor(headerHeight)
  const { top } = element.getBoundingClientRect()
  const frameWindow = document.defaultView
  const y = top + frameWindow.scrollY - offset

  frameWindow.scrollTo({ top: y, behavior: 'smooth' })
}
