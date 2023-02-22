import { ReactNode } from 'react'

export type CardProps = {
  title?: string | ReactNode
  subtitle?: string | ReactNode
  isChecked?: boolean
  children?: string | ReactNode
}
