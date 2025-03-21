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
            <div className="relative overflow-hidden rounded-lg shadow-lg">
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
              <div className="bg-foreground h-1 w-20" />
            </div>
            <div
              className={`${isVisible ? 'animate-fadeUp6B' : 'opacity-0'} text-muted-foreground text-lg transition-opacity`}
              style={{ animationDelay: '0.4s' }}
            >
              자기소개1
            </div>
            <div
              className={`${isVisible ? 'animate-fadeUp6B' : 'opacity-0'} text-muted-foreground text-lg transition-opacity`}
              style={{ animationDelay: '0.6s' }}
            >
              자기소개2
            </div>

            {/* buttons */}
            <div
              className={`${isVisible ? 'animate-fadeUp6B' : 'opacity-0'} flex flex-wrap gap-4 pt-2 text-sm transition-opacity`}
              style={{ animationDelay: '0.8s' }}
            >
              <button className="hover:bg-muted flex h-9 items-center justify-center gap-2 rounded-md border px-3 font-medium hover:cursor-pointer">
                <FileText className="h-4 w-4" />
                이력서 다운로드
              </button>
              <button className="hover:bg-muted flex h-9 items-center justify-center gap-2 rounded-full px-3 hover:cursor-pointer">
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
