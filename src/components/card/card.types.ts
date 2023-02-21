import { ReactNode } from 'react'

export type CardProps = {
  title?: string | ReactNode
  subtitle?: string | ReactNode
  cancelAction?: () => void
  children?: string | ReactNode
}
