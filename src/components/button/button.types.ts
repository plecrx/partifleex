import { ReactNode } from 'react'

export enum ButtonVariant {
  RED = 'red',
  GREEN = 'green',
}

export type ButtonProps = {
  children: ReactNode
  onClick: () => void
  variant: ButtonVariant
}
