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
  CardHeaderAction,
} from './card.styles'
import { CardProps } from './card.types'

export const Card = ({ title, subtitle, isChecked, onCardSelect, children }: CardProps) => (
  <CardContainer>
    <CardBody>
      <CardHeader>
        <CardHeaderLabel>
          {title && <Title>{title}</Title>}
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
        </CardHeaderLabel>
        <CardHeaderAction>
          <Checkbox isChecked={isChecked} onChange={onCardSelect} />
        </CardHeaderAction>
      </CardHeader>
      {children && <ContentWrapper>{children}</ContentWrapper>}
    </CardBody>
  </CardContainer>
)
