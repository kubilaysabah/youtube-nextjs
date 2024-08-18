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
                d='M20 8H10a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V10a2 2 0 00-2-2z'
            ></path>
            <path
                stroke={color}
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='1.5'
                d='M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2'
            ></path>
        </svg>
    );
}

export default memo(Icon);