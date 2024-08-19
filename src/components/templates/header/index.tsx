import { Logo, Search } from '@/components/organisms'

export default function Header() {
    return (
        <header>
            <section className="container">
                <Logo />
                <Search />
            </section>
        </header>
    )
}