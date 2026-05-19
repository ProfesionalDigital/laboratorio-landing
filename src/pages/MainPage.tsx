import { Navbar } from '../sections/Navbar'
import { Hero } from '../sections/Hero'
import { StatsBar } from '../sections/StatsBar'
import { Services } from '../sections/Services'
import { WhyUs } from '../sections/WhyUs'
import { HowItWorks } from '../sections/HowItWorks'
import { Traceability } from '../sections/Traceability'
import { CtaBanner } from '../sections/CtaBanner'
import { Contact } from '../sections/Contact'
import { Footer } from '../sections/Footer'

export function MainPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsBar />
      <Services />
      <WhyUs />
      <HowItWorks />
      <Traceability />
      <CtaBanner />
      <Contact />
      <Footer />
    </>
  )
}
