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
                strokeWidth='1.5'
                d='M11 6l-5.293 5.293a1 1 0 000 1.414L11 18m6-12l-5.293 5.293a1 1 0 000 1.414L17 18'
            ></path>
        </svg>
    );
}

export default memo(Icon);