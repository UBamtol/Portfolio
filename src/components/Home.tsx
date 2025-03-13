import { ArrowDown } from 'lucide-react';
import Navbar from './Navbar';

const Home = () => {
  return (
    <section id="home" className="relative flex h-screen flex-col">
      <Navbar />
      <div className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-4 md:px-6">
        <div className="absolute inset-0 z-0">
          <div className="from-foreground/10 to-#f1f5f9/10 absolute inset-0 bg-gradient-to-r opacity-50" />
        </div>

        <div className="z-10 mx-auto max-w-3xl text-center">
          <div>
            <h1 className="animate-fadeUpSm mb-4 text-4xl font-bold tracking-tight md:text-6xl">
              <span className="text-foreground">Frontend Developer</span>
            </h1>

            <div className="animate-fadeUpMd">
              <p className="text-muted-foreground mb-8 text-xl md:text-2xl">
                간단한 자기소개
              </p>
            </div>
          </div>

          <div className="animate-fadeUpLg flex flex-col justify-center gap-4 sm:flex-row">
            <button className="bg-foreground text-background h-11 rounded-md border px-8 text-sm font-medium hover:cursor-pointer">
              프로젝트 보기
            </button>
            <button className="text-foreground bg-background h-11 rounded-md border px-8 text-sm font-medium hover:cursor-pointer">
              이력서 다운로드
            </button>
          </div>
        </div>
      </div>
      <div className="hover:bg-muted-foreground/5 absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce cursor-pointer rounded-full p-2 shadow-lg duration-300">
        <ArrowDown
          className="text-foreground h-6 w-6"
          onClick={() => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        />
      </div>
    </section>
  );
};

export default Home;
