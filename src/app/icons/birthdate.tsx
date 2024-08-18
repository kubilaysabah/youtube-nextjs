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
                d='M20 21v-8a2 2 0 00-2-2H6a2 2 0 00-2 2v8'
            ></path>
            <path
                stroke={color}
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='1.5'
                d='M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1M2 21h20M7 8v2M12 8v2M17 8v2M7 4h.01M12 4h.01M17 4h.01'
            ></path>
        </svg>
    );
}

export default memo(Icon);