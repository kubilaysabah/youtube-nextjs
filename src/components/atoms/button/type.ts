import type { ReactNode } from 'react';

export type ButtonProps = {
    className?: string;
    children?: ReactNode;
    noHover?: boolean;
    color?: 'primary' | 'secondary' | 'tertiary';
    variant?: 'solid' | 'border';
    size?: 'small' | 'large';
    icon?: {
        name: 'search';
        position?: 'center' | 'left' | 'right';
        color?: string;
    };
}