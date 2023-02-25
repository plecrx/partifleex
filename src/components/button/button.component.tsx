import React, { FC } from 'react'

import { Container } from './button.styles'
import { ButtonProps } from './button.types'

export const Button: FC<ButtonProps> = ({ variant, onClick, children }) => (
  <Container type="button" variant={variant} onClick={onClick}>
    {children}
  </Container>
)
