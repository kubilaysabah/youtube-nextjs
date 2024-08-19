import { Button } from '@/components/atoms'

export default function Search() {
    return (
        <section>
            <Button variant={'solid'} color={'tertiary'} size={'large'} icon={{ name: 'search' }} />
        </section>
    )
}