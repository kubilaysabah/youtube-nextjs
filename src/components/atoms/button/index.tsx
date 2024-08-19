"use client";

import { Suspense, lazy, useMemo } from 'react';
import clsx from 'clsx';
import type { ButtonProps } from './type';
import { Loader } from '@/components/atoms'

const loadIcon = (iconName: string) => {
    if (iconName) {
        return lazy(() => import((`@/icons/${iconName}`)));
    }
};

function Icon({ iconName }: { iconName?: string }) {
    if (!iconName) {
        return;
    }

    const IconComponent = loadIcon(iconName);

    if (!IconComponent) {
        return;
    }

    return (
        <Suspense fallback={<Loader />}>
            <IconComponent />
        </Suspense>
    );
}

export default function Button({ color, variant, children, size, className = '', icon, noHover = false }: ButtonProps) {
    const classes: string = useMemo((): string => {
        return clsx(className, size, {
            'primary-solid': color === 'primary' && variant === 'solid',
            'secondary-solid': color === 'secondary' && variant === 'solid',
            'tertiary-solid': color === 'tertiary' && variant === 'solid',
            'icon-left': icon?.position === 'left',
            'icon-right': icon?.position === 'right',
            'icon-center': !icon?.position || icon?.position === 'center',
            'no-hover': noHover
        })
    }, [className, color, variant, size, noHover, icon]);

    return (
        <button className={classes}>
            <Icon iconName={icon?.name} />
            {children && <span>{children}</span>}
        </button>
    );
}
