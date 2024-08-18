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
                strokeWidth="1.5"
                d="M13 6l5.293 5.293a1 1 0 010 1.414L13 18M7 6l5.293 5.293a1 1 0 010 1.414L7 18"
            ></path>
        </svg>
    );
}

export default memo(Icon);
