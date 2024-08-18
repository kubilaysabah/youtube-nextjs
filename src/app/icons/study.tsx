import { memo } from 'react'

type Props = {
    color?: string;
}

function Icon({ color = "#FFFFFF" }: Props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M22 10v6m0-6L12 5 2 10l10 5 10-5z"
            ></path>
            <path
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M6 12v5c3 3 9 3 12 0v-5"
            ></path>
        </svg>
    );
}

export default memo(Icon);
