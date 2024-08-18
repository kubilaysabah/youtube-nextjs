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
                d="M19 4H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zM16 2v4M8 2v4M3 10h18M17 14h-6M13 18H7M7 14h.01M17 18h.01"
            ></path>
        </svg>
    );
}

export default memo(Icon);
