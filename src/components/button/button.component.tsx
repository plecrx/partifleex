import { Container } from 'components/button/button.styles'
import { ButtonProps } from 'components/button/button.types'
import React, { FC } from 'react'

export const Button: FC<ButtonProps> = ({ variant, onClick, children }) => (
  <Container type="button" variant={variant} onClick={onClick}>
    {children}
  </Container>
)
