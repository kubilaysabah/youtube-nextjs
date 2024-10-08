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
                strokeWidth='1.5'
                d='M1.5 10c2.833-.667 7.7-1.1 6.5 2.5C6.5 17 7 16 8 18c.8 1.6.333 3.333 0 4M5 4c1.5-.333 5-.6 7 1 2.5 2 2 5 9 1m2 6c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11zm-8.673.299C17.827 11.799 19 11.5 18 14c-.928 2.321-3.673 6.966-5.673 2.299-.5-1.167-.8-3.6 2-4z'
            ></path>
        </svg>
    );
}

export default memo(Icon);
