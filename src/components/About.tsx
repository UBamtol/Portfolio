import { useEffect, useRef, useState } from 'react';
import { FileText, Github } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const obsever = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          obsever.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (targetRef.current) {
      obsever.observe(targetRef.current);
    }
    return () => {
      if (targetRef.current) {
        obsever.unobserve(targetRef.current);
      }
    };
  }, []);
  return (
    <section id="about" className="bg-muted/30 py-20" ref={targetRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="gird-cols-1 grid items-center gap-12 md:grid-cols-3">
          {/* 이력서 사진 */}
          <div
            className={`relative transition-opacity md:col-span-1 ${isVisible ? 'animate-fadeUp6F' : 'opacity-0'}`}
          >
            <div className="dark:shadow-shadow relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="/assets/yuinjun_blue_full.jpg"
                // src="/assets/placeholder.svg"
                alt="이력서 사진"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
          {/* about me */}
          <div className="space-y-6 md:col-span-2">
            <div
              className={`${isVisible ? 'animate-fadeUp6B' : 'opacity-0'} transition-opacity`}
              style={{ animationDelay: '0.2s' }}
            >
              <h2 className="mb-2 text-3xl font-bold">About Me</h2>
              <div className="bg-primary h-1 w-20" />
            </div>
            <div
              className={`${isVisible ? 'animate-fadeUp6B' : 'opacity-0'} text-muted-foreground text-lg transition-opacity`}
              style={{ animationDelay: '0.4s' }}
            >
              <b>사용자 경험</b>을 혁신하는 프론트엔드 개발에 대한 깊은 열정을
              가진 신입 개발자 <b>유인준</b>입니다.
              <br />
              HTML, CSS, JavaScript에 대한 탄탄한 이해를 바탕으로, React를
              활용하여 사용자 친화적인 웹 인터페이스 개발에 주력해 왔습니다.
            </div>
            <div
              className={`${isVisible ? 'animate-fadeUp6B' : 'opacity-0'} text-muted-foreground text-lg transition-opacity`}
              style={{ animationDelay: '0.6s' }}
            >
              <b>끊임없는 학습</b>을 통해 <b>빠르게 성장</b>하며, <b>혁신적</b>
              이고 <b>영향력</b> 있는 웹 서비스 개발에 기여하고 싶습니다.{' '}
              <b>뛰어난 문제 해결 능력</b>과 <b>협업 능력</b>을 바탕으로 팀에{' '}
              <b>빠르게 적응</b>하여 최고의 결과물을 만들어내겠습니다.
            </div>

            {/* buttons */}
            <div
              className={`${isVisible ? 'animate-fadeUp6B' : 'opacity-0'} flex flex-wrap items-center gap-4 text-sm transition-opacity`}
              style={{ animationDelay: '0.8s' }}
            >
              <button className="hover:bg-accent hover:text-accent-foreground border-input bg-background flex h-9 items-center justify-center gap-2 rounded-md border px-3 font-medium hover:cursor-pointer">
                <FileText className="h-4 w-4" />
                이력서 다운로드
              </button>
              <button className="hover:bg-accent hover:text-accent-foreground flex h-10 w-10 items-center justify-center gap-2 rounded-full px-3 hover:cursor-pointer">
                <Github className="h-4 w-4" />
                <span className="sr-only">깃허브</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
