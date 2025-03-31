import { useEffect, useState } from 'react';
import '@/styles/index.css';
import { Menu, Moon, Sun, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

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
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isMobileMenuOpen
          ? 'bg-background shadow-sm'
          : isScrolled
            ? 'bg-background/80 shadow-sm backdrop-blur-lg'
            : 'bg-transparent'
      } animate-slideDown`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between md:h-20">
          <div className="flex items-center">
            <a
              href="#"
              className="text-primary text-2xl font-bold tracking-tight"
            >
              Yu InJun's Portfolio
            </a>
          </div>

          {/* desktop */}
          <nav className="hidden items-center space-x-8 md:flex">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="hover:text-primary text-sm transition-colors"
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

            <div
              className={`${isDarkMode ? 'hover:bg-muted-foreground' : 'hover:bg-muted'} rounded-full p-1 duration-300 hover:cursor-pointer`}
              onClick={() => toggleDarkMode()}
            >
              {isDarkMode ? <Sun /> : <Moon />}
            </div>
            {/* <button className="bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3 hover:cursor-pointer">
              Contact Me
            </button> */}
          </nav>

          {/* mobile */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              className={`${isDarkMode ? 'hover:bg-muted-foreground' : 'hover:bg-muted'} flex h-10 w-10 items-center justify-center rounded-md duration-300 hover:cursor-pointer`}
              onClick={() => toggleDarkMode()}
            >
              {isDarkMode ? (
                <Sun className="h-6 w-6" />
              ) : (
                <Moon className="h-6 w-6" />
              )}
            </button>
            <button
              className={`${isDarkMode ? 'hover:bg-muted-foreground' : 'hover:bg-muted'} flex h-10 w-10 items-center justify-center rounded-md duration-300 hover:cursor-pointer`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="bg-background animate-slideDownMobile max-h-fit md:hidden">
          <div className="space-y-4 px-4 py-4">
            {navLinks.map((link, index) => (
              <a
                key={index}
                className="hover:text-primary animate-fade-in block text-sm font-medium transition-colors hover:cursor-pointer"
                style={{ animationDelay: `${index * 0.08}s` }}
                onClick={(e) => {
                  e.preventDefault();
                  setIsMobileMenuOpen(false);
                  const element = document.querySelector(link.href);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
