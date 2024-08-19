import { memo } from 'react'

type Props = {
    color?: string;
}

function Icon({ color }: Props) {
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
                d='M10 2v8l3-3 3 3V2M4 19.5A2.5 2.5 0 016.5 17H20'
            ></path>
            <path
                stroke={color}
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='1.5'
                d='M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z'
            ></path>
        </svg>
    );
}

export default memo(Icon);
