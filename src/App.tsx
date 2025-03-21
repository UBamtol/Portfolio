import Home from '@/components/Home';
import About from '@/components/About';
import Skils from '@/components/Skils';
import Projects from '@/components/Projects';
import { useEffect } from 'react';
import '@/styles/index.css';

function App() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen">
      <Home />
      <About />
      <Skils />
      <Projects />
    </div>
  );
}

export default App;
