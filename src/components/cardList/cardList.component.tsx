import React from 'react';
import { CardListContainer, CardListTitle, CardlistWrapper } from './cardList.styles';
import { CardlistProps } from './cardList.types';

export const CardList = ({ children, title }: CardlistProps) => (
    <CardListContainer>
        <CardListTitle>{title}</CardListTitle>
        <CardlistWrapper>{children}</CardlistWrapper>
    </CardListContainer>
);