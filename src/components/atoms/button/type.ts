import type { ReactNode } from "react";

export type ButtonProps = {
    color?: "primary" | "secondary" | "tertiary";
    variant?: "solid" | "border";
    className?: string;
    children?: ReactNode;
}