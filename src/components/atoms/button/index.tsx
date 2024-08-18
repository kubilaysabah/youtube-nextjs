import clsx from 'clsx'
import type { ButtonProps } from './type'

export default function Button({ color, variant, children, className = '' }: ButtonProps) {
    const classes = clsx(className, {
        "primary-solid": color === "primary" && variant === "solid",
        "secondary-solid": color === "secondary" && variant === "solid",
        "tertiary-solid": color === "tertiary" && variant === "solid",
    });

    return (
        <button className={classes}>
            {children}
        </button>
    )
}