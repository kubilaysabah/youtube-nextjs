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
                d='M20 6L9 17l-5-5'
            ></path>
        </svg>
    );
}

export default memo(Icon);
