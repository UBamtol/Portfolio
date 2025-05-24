import { Github, Mail } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const Contact = () => {
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

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: '이메일',
      value: 'yij0325@gmail.com',
      href: 'mailto:yij0325@gmail.com',
    },
    {
      icon: <Github className="h-5 w-5" />,
      title: 'Github',
      value: 'https://github.com/UBamtol',
      href: 'https://github.com/UBamtol',
    },
    // {
    //   icon: <Linkedin className="h-5 w-5" />,
    //   title: 'Linkedin',
    //   value: 'https://www.linkedin.com/in/98-yuinjun/',
    //   href: 'https://www.linkedin.com/in/98-yuinjun/',
    // },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold">Contact Me</h2>
          <div className="bg-primary mx-auto mb-6 h-1 w-20" />
          <p className="mx-auto max-w-2xl text-lg whitespace-pre-wrap">
            {`프로젝트 협업, 채용 문의, 또는 궁금한 점이 있으시면 언제든지 연락해주세요.
            빠른 시일 내에 답변 드리겠습니다.`}
          </p>
        </div>
        <div
          ref={targetRef}
          // className={`relative grid grid-cols-1 gap-4 md:mx-60 ${`lg:grid-cols-${contactInfo.length}`}`}
          className="relative grid grid-cols-1 gap-4 md:mx-60 lg:grid-cols-2"
        >
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className={`${isVisible ? 'animate-fadeUp6B' : 'opacity-0'} rounded-lg p-2 transition-all md:p-6 lg:col-span-1`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <a
                key={index}
                href={item.href}
                className="group flex items-start gap-4"
                target="_blank"
              >
                <div className="bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground rounded-md p-3 transition-colors">
                  {item.icon}
                </div>
                <div className="flex w-full flex-col gap-1 overflow-hidden">
                  <h4 className="font-medium">{item.title}</h4>
                  <p className="text-muted-foreground truncate leading-5.5">
                    {item.value}
                  </p>
                </div>
              </a>
            </div>
          ))}
          {/* <div className="space-y-6 lg:col-span-1">
            <div className="rounded-lg border p-6 shadow-sm">
              <h3 className="mb-6 text-xl font-semibold">연락처 정보</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="group flex items-start gap-4"
                  >
                    <div className="bg-muted text-foreground group-hover:bg-foreground group-hover:text-background rounded-md p-3 transition-colors">
                      {item.icon}
                    </div>
                    <div className="flex flex-col gap-1">
                      <h4 className="font-medium">{item.title}</h4>
                      <p className="text-muted-foreground">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div> */}

          {/* <div
          ref={targetRef}
          className="relative grid grid-cols-1 gap-8 lg:grid-cols-3"
        >
          <div className="space-y-6 lg:col-span-1">
            <div className="rounded-lg border p-6 shadow-sm">
              <h3 className="mb-6 text-xl font-semibold">연락처 정보</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="group flex items-start gap-4"
                  >
                    <div className="bg-muted text-foreground group-hover:bg-foreground group-hover:text-background rounded-md p-3 transition-colors">
                      {item.icon}
                    </div>
                    <div className="flex flex-col gap-1">
                      <h4 className="font-medium">{item.title}</h4>
                      <p className="text-muted-foreground">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
              <div className="mt-8">
                <h3 className="mb-4 text-xl font-semibold">소셜 미디어</h3>
                <div className="flex gap-4">
                  <button className="bg-background hover:bg-muted/10 flex h-10 w-10 items-center justify-center rounded-full border text-sm font-medium">
                    <a
                      href="https://github.com/UBamtol"
                      target="blank"
                      rel="noopener noreferrer"
                      className="flex h-full w-full items-center justify-center rounded-full p-2.5"
                    >
                      <Github className="h-full w-full" />
                    </a>
                    <span className="sr-only">GitHub</span>
                  </button>
                </div>
              </div>
            </div>
          </div> */}

          {/* <div className="lg:col-span-2">
            <div className="rounded-lg border p-6 shadow-sm">
              <h3 className="mb-6 text-xl font-semibold">메세지 보내기</h3>
              {}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
