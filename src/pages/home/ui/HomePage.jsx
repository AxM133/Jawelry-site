// import { Header } from '@/widgets/header'
// import { Hero } from '@/widgets/hero'
import { ArrowUpRight } from 'lucide-react'
import { Button, Container, Eyebrow } from '@/shared/ui'

export function HomePage() {
    return (
        <>
            {/* <Header /> */}
            <main>
                <Container className="py-20">
                    <Eyebrow>Ювелирный дом · Москва</Eyebrow>
                    <h1 className="mt-6 text-display">
                        Свет,
                        <br />
                        который остаётся
                    </h1>
                    <p className="mt-6 max-w-md text-ink-muted">
                        Украшения из золота и природных камней, созданные вручную.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <Button icon={<ArrowUpRight size={14} />}>Смотреть коллекцию</Button>
                        <Button variant="outline" icon={<ArrowUpRight size={14} />}>
                            Смотреть все
                        </Button>
                    </div>
                </Container>

                {/* <Hero />
        <Categories />
        <Craftsmanship />
        <Bestsellers />
        <CollectionPromo />
        <Benefits />
        <Testimonials />
        <GiftCards />
        <Newsletter /> */}
            </main>
            {/* <Footer /> */}
        </>
    )
}
