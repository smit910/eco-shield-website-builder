
import { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="rounded-full bg-eco-green p-1 flex items-center justify-center w-8 h-8">
            <Leaf className="w-5 h-5 text-white" />
          </div>
          <span className={`text-xl font-bold ${isScrolled ? 'text-eco-green-dark' : 'text-eco-green-dark'}`}>
            EcoShield Packaging
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/solutions" className="nav-link">Solutions</Link>
          <Link to="/about-us" className="nav-link">About Us</Link>
          <Link to="/case-studies" className="nav-link">Case Studies</Link>
          <Link to="/sustainability" className="nav-link">Sustainability</Link>
          <Link to="/contact-details" className="nav-link">Contact</Link>
        </nav>

        <div className="hidden md:block">
          <Link to="/contact" className="btn-primary">Get a Quote</Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-eco-green"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-md py-4 px-4 flex flex-col space-y-4">
          <Link to="/" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/solutions" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>Solutions</Link>
          <Link to="/about-us" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>About Us</Link>
          <Link to="/case-studies" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>Case Studies</Link>
          <Link to="/sustainability" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>Sustainability</Link>
          <Link to="/contact-details" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          <Link to="/contact" className="btn-primary text-center" onClick={() => setIsMenuOpen(false)}>Get a Quote</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
