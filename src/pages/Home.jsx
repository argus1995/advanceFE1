import Hero from '../components/Hero'
import Card from '../components/Card'
import Cta from '../components/Cta'
import Footer from "../components/Footer"
import '../css/main.css'

export default function Home() {
    return (
        <>
            <main>
                <Hero />
                <Card />
                <Cta />
            </main>
            <Footer />
        </>
    )
}