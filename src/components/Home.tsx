import { ArrowDown } from 'lucide-react';
import Navbar from './Navbar';

const Home = () => {
  return (
    <section id="home" className="relative flex h-screen flex-col">
      <Navbar />
      <div className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-4 md:px-6">
        <div className="absolute inset-0 z-0">
          <div className="from-primary/10 to-secondary/10 absolute inset-0 bg-gradient-to-r opacity-50" />
          {/* <div className="from-primary to-background absolute inset-0 bg-radial from-10% to-70% opacity-50" /> */}
        </div>

        <div className="z-10 mx-auto max-w-3xl text-center">
          <div>
            <h1 className="animate-fadeUp8F mb-4 text-4xl font-bold tracking-tight md:text-6xl">
              <span className="text-primary">Frontend Developer</span>
            </h1>

            <div
              className="animate-fadeUp8B"
              style={{ animationDelay: '0.2s' }}
            >
              <p className="text-muted-foreground mb-8 text-xl md:text-2xl">
                <b>사용자 경험</b>을 디자인하는 코드, 프론트엔드 개발자{' '}
                <b>유인준</b>입니다.
              </p>
            </div>
          </div>

          <div
            className="animate-fadeUp8B flex flex-col justify-center gap-4 text-sm sm:flex-row"
            style={{ animationDelay: '0.4s' }}
          >
            <button
              className="bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md border px-8 font-medium hover:cursor-pointer"
              onClick={() => {
                const projectSection = document.getElementById('projects');
                if (projectSection) {
                  projectSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              프로젝트 보기
            </button>
            <a
              className="bg-background border-input hover:bg-accent hover:text-accent-foreground flex h-11 items-center justify-center rounded-md border px-8 font-medium hover:cursor-pointer"
              href="assets/YuInJun_resume.pdf"
              download="YuInJun_resume"
            >
              이력서 다운로드
            </a>
          </div>
        </div>
      </div>
      <div className="hover:bg-muted-foreground/10 dark:shadow-shadow duration-lg absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce cursor-pointer rounded-full p-2 shadow-lg">
        <ArrowDown
          className="text-primary h-6 w-6"
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
