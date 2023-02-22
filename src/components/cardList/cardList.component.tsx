import React from 'react'
import { CardListContainer, CardlistWrapper } from './cardList.styles'
import { CardlistProps } from './cardList.types'

export const CardList = ({ filterBar, children }: CardlistProps) => (
  <CardListContainer>
    {filterBar}
    <CardlistWrapper>{children}</CardlistWrapper>
  </CardListContainer>
)
