import { TrashIcon } from '@heroicons/react/20/solid';
import React from 'react';
import {
    CardContainer,
    CardBody,
    Title,
    ContentWrapper, CardHeader, CardHeaderLabel, Subtitle, CloseButton,
} from './card.styles';
import { CardProps } from './card.types';

export const Card = ({
    title,
    subtitle,
    cancelAction,
    children
 }: CardProps) => (
    <CardContainer>
        <CardBody>
            <CardHeader>
                <CardHeaderLabel>
                    {title && <Title>{title}</Title>}
                    {subtitle && <Subtitle>{subtitle}</Subtitle>}
                </CardHeaderLabel>
                <CloseButton onClick={cancelAction}>
                    <TrashIcon />
                </CloseButton>
            </CardHeader>
            {children && <ContentWrapper>{children}</ContentWrapper>}
        </CardBody>
    </CardContainer>
);