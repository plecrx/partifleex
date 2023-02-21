import { ActionWrapper, PrimaryActionWraper, SecondaryActionWraper } from './card.styles';
import { CardActionProps } from './card.types';

export const CardActionWrapper = ({
  primaryAction,
  secondaryAction,
}: CardActionProps) => (
    <ActionWrapper>
        {secondaryAction && (
            <SecondaryActionWraper>
                {secondaryAction}
            </SecondaryActionWraper>
        )}
        {primaryAction && (
            <PrimaryActionWraper>
                {primaryAction}
            </PrimaryActionWraper>
        )}
    </ActionWrapper>
);