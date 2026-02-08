import Hero from '@/components/Hero'
import Formations from '@/components/Formations'
import Tarifs from '@/components/Tarifs'
import Avantages from '@/components/Avantages'
import CommentCaMarche from '@/components/CommentCaMarche'
import PermisInfo from '@/components/PermisInfo'
import FAQ from '@/components/FAQ'
import ContactForm from '@/components/ContactForm'

export default function Home() {
  return (
    <>
      <Hero />
      <Formations />
      <Tarifs />
      <CommentCaMarche />
      <Avantages />
      <PermisInfo />
      <FAQ />
      <ContactForm />
    </>
  )
}
