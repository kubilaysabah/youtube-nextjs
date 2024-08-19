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
                d="M9 19.646A3.99 3.99 0 0012 21a3.99 3.99 0 003-1.354M16 2a9.017 9.017 0 014.777 6.064M7.777 2A9.017 9.017 0 003 8.064m14.997 5.117V10c0-3.323-2.675-6-5.997-6s-6.034 2.563-6.034 6v3.158c0 .483-.075.963-.223 1.422l-.738 2.291c-.02.063.025.128.089.128h13.77a.1.1 0 00.094-.13l-.743-2.307a4.505 4.505 0 01-.218-1.382z"
            ></path>
        </svg>
    );
}

export default memo(Icon);
