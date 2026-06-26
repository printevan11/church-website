import React, { useState, useEffect } from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import logo from '../assets/logo.png';

const NAV_ITEMS = [
  { label: 'Mission & Vision', href: '#mission' },
  { label: 'About Us', href: '#about-church' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Events', href: '#activities' },
  { label: 'Contact Us', href: '#contact-us' }
];

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(false);

  // Detect scroll to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setVisible(true);
    };

    // Initial fade-in on load
    const timer = setTimeout(() => setVisible(true), 100);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="font-sans antialiased">
      <nav className={`fixed top-0 left-0 right-0 z-50 px-4 py-0.5 transition-all duration-500 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      } ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between h-20">

          <a
            href="#"
            className="flex items-center gap-2 group focus:outline-none"
            style={{ outline: 'none' }}
            aria-label="Crossroads Home"
          >
            <img
              src={logo}
              alt="Crossroads Logo"
              className={`w-36 h-36 object-contain transition-transform duration-200 group-hover:scale-[1.02] ${
                scrolled ? '' : 'brightness-0 invert'
              }`}
              style={{ outline: 'none' }}
            />
          </a>

          <div className="hidden lg:flex items-center gap-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`relative text-sm font-semibold tracking-wide px-3 py-2 ${
                  scrolled ? 'text-black hover:text-neutral-600' : 'text-white hover:text-white/80'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 -mr-2 focus:outline-none ${scrolled ? 'text-black' : 'text-white'}`}
              aria-label="Toggle mobile navigation menu"
            >
              {isOpen ? (
                <X className="w-8 h-8 stroke-[2.5]" />
              ) : (
                <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="3" y1="5" x2="21" y2="5" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                  <line x1="3" y1="15" x2="21" y2="15" />
                  <line x1="3" y1="20" x2="21" y2="20" />
                </svg>
              )}
            </button>
          </div>

        </div>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-neutral-200 shadow-2xl transition-all duration-300 ease-in-out lg:max-w-xs lg:left-auto lg:right-6 lg:top-20 lg:rounded-2xl lg:border lg:shadow-xl">
              <div className="px-6 py-6 flex flex-col gap-4">
                <div className="flex items-center justify-between pb-3 border-b border-neutral-100 lg:hidden">
                  <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">Menu Navigation</span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 text-neutral-400 hover:text-black transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between text-[16px] font-semibold text-black hover:text-neutral-500 py-2.5 transition-colors group"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-4 h-4 text-neutral-300 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                ))}
              </div>
            </div>
        )}
      </nav>

    </div>
  );
}