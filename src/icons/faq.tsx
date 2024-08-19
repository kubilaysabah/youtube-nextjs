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
                d="M12 18v.01M8 10a4 4 0 114.99 3.877c-.535.136-.99.57-.99 1.123m11-3c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11z"
            ></path>
        </svg>
    );
}

export default memo(Icon);
