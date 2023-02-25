import { CategoryTitle, CategoryWrapper } from 'components/cardlist/cardList.styles'
import { CardListProps } from 'components/cardlist/cardList.types'
import React, { FC } from 'react'

export const CardList: FC<CardListProps> = ({ title, children }) => (
  <CategoryWrapper key={`cardlist-${title}`}>
    {title && <CategoryTitle>{title}</CategoryTitle>}
    {children}
  </CategoryWrapper>
)
