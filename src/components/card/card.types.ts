import { ReactNode } from 'react'

export type CardProps = {
  children?: string | ReactNode
  isChecked?: boolean
  onCardSelect?: () => void
  subtitle?: string | ReactNode
  title?: string | ReactNode
}
