import {
  ChevronLeft,
  ChevronRight,
  Code,
  ExternalLink,
  Github,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef(null);
  const [activeProject, setActiveProject] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

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

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [modalOpen]);

  const projects = [
    {
      title: '프로젝트1',
      description: '설명1',
      image: '/assets/placeholder.svg?height=600&width=800',
      tags: ['React', 'Tailwind CSS', 'Redux', 'Firebase'],
      liveUrl: '#',
      githubUrl: '#',
      challenge: '도전과제',
      solution: '해결방법',
      result: '결과',
    },
    {
      title: '프로젝트2',
      description: '설명2',
      image: '/assets/placeholder.svg?height=600&width=800',
      tags: ['React', 'Tailwind CSS', 'Redux', 'Firebase'],
      liveUrl: '#',
      githubUrl: '#',
      challenge: '도전과제',
      solution: '해결방법',
      result: '결과',
    },
    {
      title: '프로젝트3',
      description: '설명3',
      image: '/assets/placeholder.svg?height=600&width=800',
      tags: ['React', 'Tailwind CSS', 'Redux', 'Firebase'],
      liveUrl: '#',
      githubUrl: '#',
      challenge: '도전과제',
      solution: '해결방법',
      result: '결과',
    },
  ];

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length);
  };
  const preProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
  };
  const handleClose = () => {
    setIsClosing(!isClosing);
    setTimeout(() => {
      setModalOpen(!modalOpen);
    }, 150);
  };
  const handleClicked = () => {
    setIsClicked(true);
    setButtonDisabled(true);
    setTimeout(() => {
      setIsClicked(false);
      setButtonDisabled(false);
    }, 500);
  };

  return (
    <section id="projects" className="bg-muted/30 py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold">Projects</h2>
          <div className="bg-primary mx-auto mb-6 h-1 w-20" />
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            다양한 기술을 활용하여 개발한 프로젝트들입니다. 각 프로젝트는 특정
            문제를 해결하기 위한 과정과 결과물을 보여줍니다.
          </p>
        </div>

        <div ref={targetRef} className="relative">
          <div className="pointer-events-none absolute top-1/2 z-10 hidden w-full -translate-y-1/2 justify-between px-4 md:flex">
            <button
              className="bg-background hover:bg-accent pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full shadow-sm backdrop-blur-sm duration-200 hover:cursor-pointer hover:shadow-md"
              onClick={() => (preProject(), handleClicked())}
              disabled={buttonDisabled}
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous project</span>
            </button>
            <button
              className="bg-background hover:bg-accent pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full shadow-sm backdrop-blur-sm duration-200 hover:cursor-pointer hover:shadow-md"
              onClick={() => (nextProject(), handleClicked())}
              disabled={buttonDisabled}
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Previous project</span>
            </button>
          </div>

          <div
            className={`${isVisible ? 'animate-fadeUp6F' : 'opacity-0'} gird-cols-1 grid items-center gap-8 md:grid-cols-2`}
          >
            <div
              className={`${isClicked ? 'animate-fadeSlide-left' : ''} shadw-lg border-border relative overflow-hidden rounded-lg border`}
            >
              <img
                src={projects[activeProject].image || '/assets/placeholder.svg'}
                className="h-auto w-full object-cover"
              />
              <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/60 to-transparent p-6 opacity-0 transition-all hover:opacity-100">
                <div className="flex gap-4">
                  <button className="bg-primary text-primary-foreground hover:bg-primary/90 flex h-9 items-center justify-center gap-2 rounded-md px-3 text-sm font-medium hover:cursor-pointer">
                    <a
                      href={projects[activeProject].liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </button>

                  <button className="hover:bg-accent hover:text-accent-foreground border-input bg-background flex h-9 items-center justify-center gap-2 rounded-md border px-3 text-sm font-medium hover:cursor-pointer">
                    <a
                      href={projects[activeProject].githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </button>
                </div>
              </div>
            </div>

            <div
              className={`${isClicked ? 'animate-fadeSlide-right' : ''} space-y-6`}
            >
              <div>
                <h3 className="mb-2 text-2xl font-bold">
                  {projects[activeProject].title}
                </h3>
                <p className="text-muted-foreground">
                  {projects[activeProject].description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {projects[activeProject].tags.map((tag, index) => (
                  <div
                    key={index}
                    className="bg-secondary text-secondary-foreground hover:bg-secondary/10 flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold hover:-translate-y-0.5 hover:cursor-pointer hover:shadow-md"
                  >
                    {tag}
                  </div>
                ))}
              </div>
              {/* 프로젝트 상세 보기 */}
              <button
                className="bg-background hover:bg-accent hover:text-accent-foreground border-input flex items-center justify-center gap-2 rounded-md border p-2 font-medium hover:cursor-pointer"
                onClick={() => (
                  setModalOpen(!modalOpen), setIsClosing(!isClosing)
                )}
              >
                <Code className="h-4 w-4" />
                <div className="text-sm">프로젝트 상세보기</div>
              </button>
            </div>
          </div>
          <div className="mt-8 flex justify-center gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`h-3 w-3 rounded-full transition-colors duration-500 ${index === activeProject ? 'bg-primary' : 'bg-muted-foreground/30'} hover:cursor-pointer`}
                onClick={() => (setActiveProject(index), handleClicked())}
                disabled={buttonDisabled}
              />
            ))}
          </div>
        </div>
      </div>
      {modalOpen && (
        <div className="fixed inset-0 z-50">
          <div
            className={`absolute inset-0 bg-black/80 duration-900 ${isClosing ? 'animate-fade-in' : 'animate-fade-out'} transition-opacity`}
            onClick={() => handleClose()}
          >
            <div
              data-state={`${isClosing ? 'open' : 'closed'}`}
              className="bg-background data-[state=open]:animate-zoom-in data-[state=closed]:animate-zoom-out fixed top-1/2 left-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 rounded-lg p-6 shadow-lg sm:max-w-[600px]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col space-y-2 text-center sm:text-left">
                <div className="text-lg leading-none font-semibold tracking-tight">
                  {projects[activeProject].title}
                </div>
                <div className="text-muted-foreground text-sm">
                  프로젝트 개발 과정과 문제 해결 방법
                </div>
              </div>
              <div className="space-y-4 py-4">
                <div>
                  <h4 className="mb-2 font-medium">도전 과제</h4>
                  <p className="text-muted-foreground text-sm">
                    {projects[activeProject].challenge}
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 font-medium">해결 방법</h4>
                  <p className="text-muted-foreground text-sm">
                    {projects[activeProject].solution}
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 font-medium">결과</h4>
                  <p className="text-muted-foreground text-sm">
                    {projects[activeProject].result}
                  </p>
                </div>
              </div>
              <div className="flex justify-between">
                <button className="bg-primary text-primary-foreground hover:bg-primary/90 flex items-center justify-center gap-2 rounded-md border font-medium hover:cursor-pointer">
                  <a
                    href={projects[activeProject].githubUrl}
                    target="blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2 text-sm"
                  >
                    <ExternalLink className="h-4 w-4" />
                    라이브 데모
                  </a>
                </button>
                <button className="bg-background hover:bg-accent hover:text-accent-foreground border-border flex items-center justify-center gap-2 rounded-md border font-medium hover:cursor-pointer">
                  <a
                    href={projects[activeProject].githubUrl}
                    target="blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2 text-sm"
                  >
                    <Github className="h-4 w-4" />
                    GitHub 저장소
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
