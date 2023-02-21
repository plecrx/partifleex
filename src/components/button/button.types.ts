import { ReactNode } from 'react'

export enum ButtonColor {
  RED = 'red',
}

export type ButtonProps = {
  color: ButtonColor
  children: ReactNode
}
