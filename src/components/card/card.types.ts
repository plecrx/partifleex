import { ReactNode } from 'react'

export type CardProps = {
  title?: string | ReactNode
  subtitle?: string | ReactNode
  onRemoveClick?: () => void
  children?: string | ReactNode
}
