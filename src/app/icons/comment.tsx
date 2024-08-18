import { memo } from 'react'

type Props = {
    color?: string;
}

function Icon({ color = "#FFFFFF" }: Props) {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            fill='none'
            viewBox='0 0 24 24'
        >
            <path
                stroke={color}
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='1.5'
                d='M14 9a2 2 0 01-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 012 2v5zM18 9h2a2 2 0 012 2v11l-4-4h-6a2 2 0 01-2-2v-1'
            ></path>
        </svg>
    );
}

export default memo(Icon);
