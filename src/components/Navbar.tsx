import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav 
      id="navbar" 
      style={{ boxShadow: isScrolled ? '0 4px 24px rgba(0,0,0,.3)' : 'none' }} 
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
        isScrolled ? 'bg-[#1B2A4A]' : 'bg-[rgba(27,42,74,0.9)]'
      } backdrop-blur-[10px] border-b border-[rgba(245,166,35,0.15)]`}
    >
      <div className="flex items-center justify-between py-[0.9rem] px-[1.5rem] max-w-[1140px] mx-auto">
        
        {/* LOGO SECTION */}
        <div className="nav-logo">
          <a href="/">
            <img 
              src="/logo.png" 
              alt="AJ Digital Growth" 
              className="h-[44px] w-auto" 
              onError={(e) => { 
                const target = e.target as HTMLImageElement;
                target.style.display='none'; 
                if (target.nextElementSibling) {
                  (target.nextElementSibling as HTMLElement).style.display = 'block';
                }
              }} 
            />
            {/* Fallback Text if Logo fails */}
            <span style={{ display: 'none' }} className="font-['Syne'] text-[1.1rem] font-extrabold text-[#F5A623]">
              AJ<span className="text-white"> Digital Growth</span>
            </span>
          </a>
        </div>

        {/* DESKTOP LINKS (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-[2rem] nav-links">
          <a href="#problem" className="text-[14px] font-medium text-[rgba(255,255,255,0.8)] hover:text-[#F5A623] transition-colors">The Problem</a>
          <a href="#services" className="text-[14px] font-medium text-[rgba(255,255,255,0.8)] hover:text-[#F5A623] transition-colors">Services</a>
          <a href="#about" className="text-[14px] font-medium text-[rgba(255,255,255,0.8)] hover:text-[#F5A623] transition-colors">About AJ</a>
          <a href="#pricing" className="text-[14px] font-medium text-[rgba(255,255,255,0.8)] hover:text-[#F5A623] transition-colors">Pricing</a>
          <a href="#contact" className="text-[14px] font-medium text-[rgba(255,255,255,0.8)] hover:text-[#F5A623] transition-colors">Contact</a>
          <a 
            className="btn btn-primary px-[1.4rem] py-[0.6rem] text-[14px] font-bold" 
            href="https://wa.me/265987808110?text=Hi%20AJ%2C%20I%20want%20a%20free%20audit" 
            target="_blank" 
            rel="noreferrer"
          >
            Free Audit →
          </a>
        </div>

        {/* HAMBURGER BUTTON (Visible on Mobile Only) */}
        <button 
          className="flex md:hidden flex-col gap-[5px] cursor-pointer bg-none border-none p-[4px]" 
          id="hamburger" 
          aria-label="Menu" 
          onClick={toggleMenu}
        >
          <span className={`block w-[24px] h-[2px] bg-white transition-all duration-300 rounded-[2px] ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
          <span className={`block w-[24px] h-[2px] bg-white transition-all duration-300 rounded-[2px] ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-[24px] h-[2px] bg-white transition-all duration-300 rounded-[2px] ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
        </button>
      </div>

      {/* MOBILE OVERLAY MENU */}
      <div 
        className={`${isOpen ? 'flex' : 'hidden'} md:hidden fixed top-[64px] left-0 right-0 bg-[#1B2A4A] z-[999] p-[1.5rem] flex-col gap-[1rem] border-b-2 border-[#F5A623] shadow-2xl`} 
        id="mobileMenu"
      >
        <a href="#problem" className="text-[18px] text-white font-medium py-[0.5rem]" onClick={() => setIsOpen(false)}>The Problem</a>
        <a href="#services" className="text-[18px] text-white font-medium py-[0.5rem]" onClick={() => setIsOpen(false)}>Services</a>
        <a href="#about" className="text-[18px] text-white font-medium py-[0.5rem]" onClick={() => setIsOpen(false)}>About AJ</a>
        <a href="#pricing" className="text-[18px] text-white font-medium py-[0.5rem]" onClick={() => setIsOpen(false)}>Pricing</a>
        <a href="#contact" className="text-[18px] text-white font-medium py-[0.5rem]" onClick={() => setIsOpen(false)}>Contact</a>
        <a 
          className="btn btn-primary flex justify-center mt-[0.5rem] py-4" 
          href="https://wa.me/265987808110?text=Hi%20AJ%2C%20I%20want%20a%20free%20audit" 
          target="_blank" 
          rel="noreferrer"
          onClick={() => setIsOpen(false)}
        >
          Get Free Audit →
        </a>
      </div>
    </nav>
  );
}
//<a href="#" className="flex items-center"> <img src="/logo.png" alt="AJ Digital Growth Logo" className="h-10 w-auto" /> </a>
