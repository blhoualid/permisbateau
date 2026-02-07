import Hero from '@/components/Hero'
import Formations from '@/components/Formations'
import Tarifs from '@/components/Tarifs'
import Avantages from '@/components/Avantages'
import Temoignages from '@/components/Temoignages'
import FAQ from '@/components/FAQ'
import ContactForm from '@/components/ContactForm'

export default function Home() {
  return (
    <>
      <Hero />
      <Formations />
      <Tarifs />
      <Avantages />
      <Temoignages />
      <FAQ />
      <ContactForm />
    </>
  )
}
