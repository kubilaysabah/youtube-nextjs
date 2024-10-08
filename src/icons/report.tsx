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
                d="M6 13V5a2 2 0 012-2h8a2 2 0 012 2v8m-8-6h4m-4 4h4M5 21h14a2 2 0 002-2v-5.461a1 1 0 00-1.406-.914l-6.782 3.014a2 2 0 01-1.624 0l-6.782-3.014A1 1 0 003 13.539V19a2 2 0 002 2z"
            ></path>
        </svg>
    );
}

export default memo(Icon);
