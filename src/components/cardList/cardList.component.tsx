import { Checkbox } from 'components/checkbox/checkbox.component'
import React from 'react'
import {
  CardListContainer,
  CardListHeader,
  CardListSelector,
  CardListTitle,
  CardlistWrapper,
} from './cardList.styles'
import { CardlistProps } from './cardList.types'

export const CardList = ({ children, title }: CardlistProps) => (
  <CardListContainer>
    <CardListHeader>
      <CardListTitle>{title}</CardListTitle>
      <CardListSelector>
        <Checkbox isChecked={false} onChange={() => {}} />
        Tout sélectionner
      </CardListSelector>
    </CardListHeader>
    <CardlistWrapper>{children}</CardlistWrapper>
  </CardListContainer>
)
