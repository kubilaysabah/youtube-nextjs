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
                d="M12 7v3m0 0v3m0-3h3m-3 0H9M4 21.191V4a2 2 0 012-2h12a2 2 0 012 2v17.191a.5.5 0 01-.724.447l-6.382-3.19a2 2 0 00-1.788 0l-6.382 3.19A.5.5 0 014 21.191z"
            ></path>
        </svg>
    );
}

export default memo(Icon);
