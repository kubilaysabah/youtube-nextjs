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
                d="M6 8a6 6 0 1112 0c0 7 3 9 3 9H3s3-2 3-9zM10.3 21a1.941 1.941 0 003.4 0"
            ></path>
        </svg>
    );
}

export default memo(Icon);
