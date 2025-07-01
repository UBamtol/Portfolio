import Home from '@/components/Home';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import { useEffect } from 'react';
import '@/styles/index.css';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen">
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
