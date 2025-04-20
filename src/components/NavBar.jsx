import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
      ${scrolled ? "bg-black/80 backdrop-blur-sm shadow-lg" : ""}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-white hover:text-white/80 transition-colors z-50">
          Aashu
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <Link 
                  to={link.replace('#', '/')}
                  className="text-white hover:text-white/80 transition-colors relative"
                >
                  <span>{name}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white 
                    transition-all duration-300 opacity-0 group-hover:w-full 
                    group-hover:opacity-100" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="z-50 p-2 md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-5 flex flex-col justify-between ${isOpen ? 'open' : ''}`}>
            <span className={`block h-0.5 w-full bg-white rounded-full transition-all duration-300 
              ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 w-full bg-white rounded-full transition-all duration-300 
              ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-full bg-white rounded-full transition-all duration-300 
              ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>

        {/* Mobile Navigation */}
        <nav className={`fixed top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-md 
          transform transition-transform duration-300 md:hidden
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <ul className="flex flex-col items-center justify-center h-full gap-8 px-4">
            {navLinks.map(({ link, name }) => (
              <li key={name}>
                <Link 
                  to={link.replace('#', '/')}
                  className="text-2xl text-white font-medium hover:text-white/80 
                    transition-colors block py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {name}
                </Link>
              </li>
            ))}
            <li>
              <Link 
                to="/contact" 
                className="px-6 py-2 border border-white rounded-full hover:bg-white 
                  hover:text-black transition-all active:scale-95 mt-4"
                onClick={() => setIsOpen(false)}
              >
                Contact me
              </Link>
            </li>
          </ul>
        </nav>

        <Link to="/contact" 
          className="px-6 py-2 border border-white rounded-full hover:bg-white 
            hover:text-black transition-all hidden md:flex">
          <span>Contact me</span>
        </Link>
      </div>
    </header>
  );
}

export default NavBar;