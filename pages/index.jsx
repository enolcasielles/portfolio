import Head from 'next/head'
import Navbar from '../components/Navbar'
import Intro from '../components/Intro';
import About from '../components/About';
import Skills from '../components/Skills';
import Works from '../components/Works';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {

  const goSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({behavior: 'smooth'})
  }

  return (
    <>
      <Head>
        <title>Enol Casielles</title>+
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar onGoSection={goSection}/>
      <main>
        <Intro onClickButton={() => {goSection('about')}} />
        <About onGoContact={() => {goSection('contact')}}/>
        <Skills />
        <Works />
        <Contact />
        <Footer></Footer>
      </main>

      <style jsx>{`
        main {
          padding-top: 80px;
        }
      `}</style>

    </>
  )
}
