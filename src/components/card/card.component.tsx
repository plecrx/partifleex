import { Checkbox } from 'components/checkbox/checkbox.component'
import React from 'react'
import {
  CardContainer,
  CardBody,
  Title,
  ContentWrapper,
  CardHeader,
  CardHeaderLabel,
  Subtitle,
} from './card.styles'
import { CardProps } from './card.types'

export const Card = ({ title, subtitle, children }: CardProps) => (
  <CardContainer>
    <CardBody>
      <CardHeader>
        <CardHeaderLabel>
          {title && <Title>{title}</Title>}
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
        </CardHeaderLabel>
        <div style={{ alignSelf: 'flex-start' }}>
          <Checkbox />
        </div>
      </CardHeader>
      {children && <ContentWrapper>{children}</ContentWrapper>}
    </CardBody>
  </CardContainer>
)
