import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Universities from './components/Universities';
import Filieres from './components/Filieres';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <Universities />
      <Filieres />
      <Testimonials />
      <Process />
      <Contact />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
