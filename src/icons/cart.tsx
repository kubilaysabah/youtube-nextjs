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
                strokeWidth="1.5"
                d="M9 10V6a3 3 0 116 0v4M5 18h14M6.148 22h11.704a2 2 0 001.995-2.142l-.714-10A2 2 0 0017.138 8H6.862a2 2 0 00-1.995 1.858l-.714 10A2 2 0 006.148 22z"
            ></path>
        </svg>
    );
}

export default memo(Icon);
