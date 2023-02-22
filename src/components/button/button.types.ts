import { ReactNode } from 'react'

export enum ButtonColor {
  NEUTRAL = '#d3d3d3',
  RED = '#FC5C63',
}

export type ButtonProps = {
  color: ButtonColor
  children: ReactNode
}
