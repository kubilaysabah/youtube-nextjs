import Link from 'next/link'
import Image from 'next/image'

export default function Logo() {
    return (
        <Link href={'/'}>
            <Image
                src={"/logo.svg"}
                alt={"Design Lab"}
                width={161}
                height={26}
            />
        </Link>
    )
}