import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import {About} from './components/About';
import {Portfolio} from './components/Portfolio';
import {Contact} from './components/Contact';
import { Footer } from './components/Footer';
import Aos from 'aos';
import { RiArrowUpCircleLine, RiArrowUpSLine } from '@remixicon/react';

function App() {
  useEffect (() => {
    Aos.init();
  }, []);

  return (
    <>
    <BrowserRouter>
      <header>
        <Navbar />
      </header>
      <main>
        <HeroSection />
        <About />
        <Portfolio />
        <Contact/>
      </main>
      <footer>
        <Footer />
      </footer>
      </BrowserRouter>
    </>
  )
}

export default App
