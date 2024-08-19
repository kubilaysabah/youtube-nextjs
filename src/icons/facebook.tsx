import { memo } from 'react'

type Props = {
    color?: string;
}

function Icon({ color }: Props) {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='none'
            viewBox='0 0 16 16'
        >
            <path
                stroke={color}
                fillRule='evenodd'
                d='M5.921 15.798c0 .112.09.202.202.202h2.872c.112 0 .202-.09.202-.202V7.937h2.083c.104 0 .191-.08.2-.184l.2-2.37a.202.202 0 00-.2-.218H9.197v-1.68c0-.394.319-.713.713-.713h1.605c.111 0 .201-.09.201-.202V.202A.201.201 0 0011.515 0H8.803A2.882 2.882 0 005.92 2.882v2.283H4.485a.202.202 0 00-.202.202v2.368c0 .112.09.202.202.202H5.92v7.861z'
                clipRule='evenodd'
            ></path>
        </svg>
    );
}

export default memo(Icon);
