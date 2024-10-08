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
                d="M8 10h8m-8 4h4m9-2a9 9 0 01-12.28 8.384 2.265 2.265 0 00-1.198-.146l-3.83.645a.5.5 0 01-.575-.576l.644-3.829a2.266 2.266 0 00-.145-1.199A9 9 0 1121 12z"
            ></path>
        </svg>
    );
}

export default memo(Icon);
