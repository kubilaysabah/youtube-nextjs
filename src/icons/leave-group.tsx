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
                d="M15 7l-3 3m0 0l-3 3m3-3l3 3m-3-3L9 7M4 21.191V4a2 2 0 012-2h12a2 2 0 012 2v17.191a.5.5 0 01-.724.447l-6.382-3.19a2 2 0 00-1.788 0l-6.382 3.19A.5.5 0 014 21.191z"
            ></path>
        </svg>
    );
}

export default memo(Icon);
