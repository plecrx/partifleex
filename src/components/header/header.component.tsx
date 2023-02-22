import { Container, Title } from 'components/header/header.styles'
import { HeaderProps } from 'components/header/header.types'
import React, { FC } from 'react'

export const Header: FC<HeaderProps> = ({ title }) => (
  <Container>
    <Title>{title}</Title>
  </Container>
)
