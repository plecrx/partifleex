export type CardProps = {
    title?: string | React.ReactNode;
    children?: string | React.ReactNode;
    primaryAction?: React.ReactNode;
    secondaryAction?: React.ReactNode;
    redirectMethod?: () => void;
    hasHeader?: boolean;
    hasBorder?: boolean;
    headerComponent?: React.ReactNode;
};

export type CardActionProps = {
    primaryAction?: React.ReactNode | React.ReactNode[];
    secondaryAction?: React.ReactNode | React.ReactNode[];
};
