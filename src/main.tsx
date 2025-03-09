import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/styles/index.css';
// import App from './App.tsx'
import Title from '@components/title.tsx';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <Title />
  </StrictMode>
);
