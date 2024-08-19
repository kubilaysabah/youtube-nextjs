import { memo } from 'react'

type Props = {
    color?: string;
}

function Icon({ color }: Props) {
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
                d="M16 7h.01M3.4 18H12a8 8 0 008-8V7a4 4 0 00-7.28-2.3L2 20"
            ></path>
            <path
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M20 7l2 .5-2 .5M10 18v3M14 17.75V21M7 18a6 6 0 003.84-10.61"
            ></path>
        </svg>
    );
}

export default memo(Icon);
