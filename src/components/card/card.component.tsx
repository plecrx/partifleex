import { CardActionWrapper } from './card.action.component';
import {
    CardContainer,
    CardBody,
    CardHeader,
    Title,
    ContentWrapper,
} from './card.styles';
import { CardProps } from './card.types';

export const Card = ({
     title,
     children,
     primaryAction,
     secondaryAction,
     hasHeader = false,
     headerComponent,
     redirectMethod
 }: CardProps) => (
    <CardContainer onClick={redirectMethod}>
        {hasHeader && headerComponent && (
            <CardHeader>{headerComponent}</CardHeader>
        )}
        <CardBody>
            {title && <Title>{title}</Title>}
            {children && <ContentWrapper>{children}</ContentWrapper>}
            {(primaryAction || secondaryAction) && (
                <CardActionWrapper
                    primaryAction={primaryAction}
                    secondaryAction={secondaryAction}
                />
            )}
        </CardBody>
    </CardContainer>
);