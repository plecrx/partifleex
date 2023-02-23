import { ReactNode } from 'react'
import { CSSProperties } from 'styled-components'

export type ButtonProps = {
  css: CSSProperties
  onClick: () => void
  children: ReactNode
}
