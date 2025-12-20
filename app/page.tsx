import Header from '@/components/Header'
import Welcome from '@/components/Welcome'
import Container from '@/components/Container'
import AboutSection from '@/components/AboutSection'
import Skills from '@/components/skills'
import Projects from '@/components/Projects'
import Contact from '@/components/contact'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <main>
      <Header/>
      <div className="pt-28">
        <section className="py-20 bg-[url('/page-title-bg.png')] bg-cover bg-center">
          <Container>
            <Welcome/>
            <section id="About">
            <AboutSection/>
            </section>
          </Container>
          <Skills/>
          <Container>
            <section id='projects'>
            <Projects/>
            </section>
            <section id='contact'> 
            <Contact/>
            </section>
            <Footer/>
          </Container>
        </section>
      </div>
    </main>
  )
}
