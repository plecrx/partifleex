import { Container } from 'components/button/button.styles'
import { ButtonProps } from 'components/button/button.types'
import React, { FC } from 'react'

export const Button: FC<ButtonProps> = ({ color, children }) => (
  <Container type="button" color={color}>
    {children}
  </Container>
)
