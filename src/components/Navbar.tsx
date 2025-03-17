import { useEffect, useState } from 'react';
import '@/styles/index.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/80 shadow-sm backdrop-blur-lg'
          : 'bg-transparent'
      } animate-slideDown`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between md:h-20">
          <div className="flex items-center">
            <a
              href="#"
              className="text-foreground text-2xl font-bold tracking-tight"
            >
              Yu InJun's Portfolio
            </a>
          </div>

          {/* desktop */}
          <nav className="hidden items-center space-x-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-foreground text-sm transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector(link.href);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {link.name}
              </a>
            ))}
            <button className="bg-foreground text-background h-9 rounded-md border px-3">
              Contact Me
            </button>
          </nav>

          {/* mobile */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
