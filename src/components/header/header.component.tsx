import React, { FC } from 'react'

import { Container, Title } from './header.styles'
import { HeaderProps } from './header.types'

export const Header: FC<HeaderProps> = ({ title }) => (
  <Container>
    <Title>{title}</Title>
  </Container>
)
