import { Container } from 'components/button/button.styles'
import { ButtonProps } from 'components/button/button.types'
import React, { FC } from 'react'

export const Button: FC<ButtonProps> = ({ css, onClick, children }) => (
  <Container type="button" css={css} onClick={onClick}>
    {children}
  </Container>
)
