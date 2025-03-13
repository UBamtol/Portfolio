import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/styles/index.css';
import Home from '@/components/Home';
import About from './components/About';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    {/* 여기에 가 바탕이 됨 */}
    <div className="min-h-screen">
      <Home />
      <About />
    </div>
  </StrictMode>
);
