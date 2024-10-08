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
                d="M1 10.526l9.5-7.036a2.542 2.542 0 013 0l9.5 7.036M4.667 8.198v10.474C4.667 19.958 5.76 21 7.11 21h9.778c1.35 0 2.444-1.042 2.444-2.328V8.198m-8.555 8.147h2.444c.675 0 1.222-.521 1.222-1.164v-2.328c0-.643-.547-1.164-1.222-1.164h-2.444c-.675 0-1.222.521-1.222 1.164v2.328c0 .643.547 1.164 1.222 1.164z"
            ></path>
        </svg>
    );
}

export default memo(Icon);
