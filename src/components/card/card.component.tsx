import {
    CardContainer,
    CardBody,
    Title,
    ContentWrapper,
} from './card.styles';
import { CardProps } from './card.types';

export const Card = ({
     title,
     children
 }: CardProps) => (
    <CardContainer>
        <CardBody>
            {title && <Title>{title}</Title>}
            {children && <ContentWrapper>{children}</ContentWrapper>}
        </CardBody>
    </CardContainer>
);