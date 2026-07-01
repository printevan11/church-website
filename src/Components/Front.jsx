import React, { useState } from 'react';
import {
  X,
  Play,
  Heart,
  MapPin,
  Info,
  Clock
} from 'lucide-react';
import Footer from './Footer';
import MissionVision from './MissionVision';
import AboutChurch from './AboutChurch';
import UpdatesFeed from './UpdatesFeed';
import EventsSection from './EventsSection';
import SchoolMinistry from './SchoolMinistry';
import LifeGroupArea from './LifeGroupArea';
import ContactSection from './ContactSection';
import JIL1 from '../assets/JIL-1.jpg';
import JIL2 from '../assets/JIL-2.jpg';
import JIL3 from '../assets/JIL-3.jpg';
import JIL4 from '../assets/JIL-4.jpg';
import JIL5 from '../assets/JIL-5.jpg';
import pic1 from '../assets/pic1.jpg';
import pic2 from '../assets/pic2.jpg';
import pic3 from '../assets/pic3.jpg';

const HERO_VALUES = [
  { image: JIL1 },
  { image: JIL2 },
  { image: JIL3 },
  { image: JIL4 },
  { image: JIL5 }
];

const NAV_ITEMS = [
  { label: 'Mission & Vision', href: '#mission' },
  { label: 'About CYN', href: '#about-cyn' },
  { label: 'LifeGroup', href: '#about-lifegroup' },
  { label: 'Updates', href: '#updates' },
  { label: 'Events', href: '#activities' },
  { label: 'School Ministry', href: '#school-ministry' },
  { label: 'Contact Us', href: '#contact-us' }
];

const WELCOME_ITEMS = Array.from({ length: 8 }, (_, index) => index);

const FEATURE_LINKS = [
  { title: 'Get To Know Us', href: '#about-cyn', image: pic1 },
  { title: 'Updates', href: '#updates', image: pic2 },
  { title: 'Events', href: '#activities', image: pic3 }
];

export default function App() {
  const [activeModal, setActiveModal] = useState(null);
  const [heroSlide, setHeroSlide] = useState(0);
  const [emailInput, setEmailInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [messageInput, setMessageInput] = useState('');
  const [feedbackMsg, setFeedbackMsg] = useState('');
  const [formSent, setFormSent] = useState(false);
  const [visibleSections, setVisibleSections] = useState({});
  const [contactFormData, setContactFormData] = useState({ nameInput: '', emailInput: '', messageInput: '' });

  const setContactFormField = (field, value) => {
    setContactFormData(prev => ({ ...prev, [field]: value }));
  };

  // Scroll animation - detect which sections are visible
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-section]');
      const visible = {};
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.85;
        visible[section.id] = isVisible;
      });
      setVisibleSections(visible);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openModal = (type) => {
    setActiveModal(type);
    setFeedbackMsg('');
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFeedbackMsg("Thank you! Your information has been securely submitted to our community team.");
    setTimeout(() => {
      closeModal();
      setFormSent(false);
      setNameInput('');
      setEmailInput('');
      setMessageInput('');
    }, 2500);
  };

  const handleContactFormSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
    setContactFormData({ nameInput: '', emailInput: '', messageInput: '' });
    setTimeout(() => {
      setFormSent(false);
    }, 3000);
  };

  // Auto-advance hero carousel
  React.useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % HERO_VALUES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlide]);

  return (
    <div className="min-h-screen bg-white text-black font-sans antialiased scroll-smooth">
      {/* Hero Section - Fixed Title with Carousel Background */}
      <section className="relative overflow-hidden">
        <div className="relative h-screen min-h-[600px]">
          {/* Carousel Background Images */}
          <div className="absolute inset-0">
            {HERO_VALUES.map((item, index) => (
              <img
                key={index}
                src={item.image}
                alt={`Slide ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                  heroSlide === index ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Fixed Title */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tighter text-center leading-tight">
              Love God.<br />
              Love People.<br />
              Change the World.
            </h1>
          </div>


          {/* Carousel Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {HERO_VALUES.map((_, index) => (
              <button
                key={index}
                onClick={() => setHeroSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  heroSlide === index ? 'bg-white scale-110' : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="welcome-marquee bg-[#f5f5f7] py-10 md:py-14 overflow-hidden" aria-label="Welcome Home">
        <div className="welcome-marquee__track">
          {[...WELCOME_ITEMS, ...WELCOME_ITEMS].map((_, index) => (
            <span
              key={index}
              className={`welcome-marquee__text ${
                index % 2 === 0 ? 'welcome-marquee__text--solid' : 'welcome-marquee__text--outline'
              }`}
            >
              WELCOME<br />HOME
            </span>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 bg-black">
        {FEATURE_LINKS.map((item) => (
          <a
            key={item.title}
            href={item.href}
            className="group relative min-h-[340px] md:min-h-[520px] overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/10" />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight">
                {item.title}
              </h2>
              <div className="mt-24 flex items-center gap-5 text-white">
                <span className="text-sm md:text-base font-black">Learn More</span>
                <span className="text-3xl leading-none transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </div>
            </div>
          </a>
        ))}
      </section>

      <MissionVision visibleSections={visibleSections} />

      <AboutChurch visibleSections={visibleSections} />

      <UpdatesFeed visibleSections={visibleSections} />

      <EventsSection visibleSections={visibleSections} />

      <SchoolMinistry visibleSections={visibleSections} />

      <LifeGroupArea visibleSections={visibleSections} />

      <ContactSection
        visibleSections={visibleSections}
        formData={contactFormData}
        setFormData={setContactFormField}
        formSent={formSent}
        handleContactFormSubmit={handleContactFormSubmit}
      />

      {}
      <Footer navItems={NAV_ITEMS} />

      {}
      {activeModal === 'visit' && (
        <div className="fixed inset-0 bg-neutral-950/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white text-black max-w-md w-full rounded-xl overflow-hidden shadow-2xl border border-neutral-100 p-6 relative">
            <button onClick={closeModal} className="absolute top-4 right-4 text-neutral-400 hover:text-black">
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2.5 mb-4 text-[#1d9bf0]">
              <MapPin className="w-6 h-6" />
              <h3 className="text-xl font-black uppercase tracking-tight">Plan Your Visit</h3>
            </div>
            <p className="text-sm text-neutral-600 mb-4">
              We can't wait to meet you! Join us for authentic fellowship, deep worship, and biblically sound teachings.
            </p>
            <div className="bg-neutral-50 p-4 rounded-lg mb-6 text-xs text-neutral-700 flex flex-col gap-2 border border-neutral-100">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-neutral-400" />
                <span className="font-bold">Sunday Mornings: 9:00am</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-neutral-400" />
                <span className="font-bold">1st & 3rd Saturdays: 6:00pm</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-neutral-400" />
                <span>Main Auditorium, 123 Crossroads Dr</span>
              </div>
            </div>
            <button 
              onClick={closeModal} 
              className="w-full bg-[#1d9bf0] text-white text-xs font-black uppercase py-3 rounded-lg hover:bg-[#1a8cd8]"
            >
              Okay, Count Me In!
            </button>
          </div>
        </div>
      )}

      {activeModal === 'watch' && (
        <div className="fixed inset-0 bg-neutral-950/90 flex items-center justify-center z-50 p-4">
          <div className="bg-neutral-900 text-white max-w-2xl w-full rounded-xl overflow-hidden shadow-2xl relative">
            <button onClick={closeModal} className="absolute top-4 right-4 text-white/70 hover:text-white bg-black/40 p-1.5 rounded-full z-10">
              <X className="w-5 h-5" />
            </button>
            <div className="aspect-video w-full bg-black relative flex items-center justify-center group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80" 
                alt="Worship stream backdrop" 
                className="absolute inset-0 w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
              <div className="relative z-10 flex flex-col items-center gap-3">
                <div className="w-16 h-16 bg-[#00c853] rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                  <Play className="w-7 h-7 fill-white stroke-none ml-1" />
                </div>
                <span className="font-extrabold uppercase text-xs tracking-widest text-white drop-shadow-md">
                  Click to play stream
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-red-500">LIVE BROADCAST</span>
              </div>
              <h3 className="text-xl font-black mb-1">Sunday Service Livestream</h3>
              <p className="text-xs text-neutral-400">
                Join our family virtually! Get connected with live chat and prayer hosts during the service hours.
              </p>
            </div>
          </div>
        </div>
      )}

      {activeModal === 'connect' && (
        <div className="fixed inset-0 bg-neutral-950/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white text-black max-w-md w-full rounded-xl overflow-hidden shadow-2xl p-6 relative">
            <button onClick={closeModal} className="absolute top-4 right-4 text-neutral-400 hover:text-black">
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2.5 mb-4 text-[#1d9bf0]">
              <Heart className="w-6 h-6 fill-[#1d9bf0]" />
              <h3 className="text-xl font-black uppercase tracking-tight">Connect Card</h3>
            </div>
            <p className="text-sm text-neutral-600 mb-6">
              Fill out this simple form to stay plugged into community events, small groups, and prayer circles.
            </p>
            {feedbackMsg ? (
              <div className="bg-green-50 text-green-800 text-sm p-4 rounded-lg font-semibold border border-green-100 flex items-center gap-2">
                <Info className="w-5 h-5 text-green-500 shrink-0" />
                <span>{feedbackMsg}</span>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="text-[10px] font-extrabold uppercase tracking-wider text-neutral-400 block mb-1">Full Name</label>
                  <input 
                    type="text" 
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    placeholder="John Doe" 
                    required 
                    className="w-full border border-neutral-200 rounded-lg p-3 text-sm focus:outline-none focus:border-[#1d9bf0]" 
                  />
                </div>
                <div>
                  <label className="text-[10px] font-extrabold uppercase tracking-wider text-neutral-400 block mb-1">Email Address</label>
                  <input 
                    type="email" 
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="john@example.com" 
                    required 
                    className="w-full border border-neutral-200 rounded-lg p-3 text-sm focus:outline-none focus:border-[#1d9bf0]" 
                  />
                </div>
                <div>
                  <label className="text-[10px] font-extrabold uppercase tracking-wider text-neutral-400 block mb-1">Prayer / Connection Needs</label>
                  <select className="w-full border border-neutral-200 rounded-lg p-3 text-sm focus:outline-none focus:border-[#1d9bf0] bg-white">
                    <option>I'm looking for a home church</option>
                    <option>I would like to receive general email updates</option>
                    <option>I want to volunteer in ministries</option>
                    <option>I need personal prayer support</option>
                  </select>
                </div>
                <button type="submit" className="w-full bg-[#1d9bf0] text-white text-xs font-black uppercase py-3.5 rounded-lg hover:bg-[#1a8cd8] mt-2">
                  Submit Connect Card
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Info Modals for supplemental buttons */}
      {(activeModal === 'more-about' || activeModal === 'family-ministry' || activeModal === 'new-here' || activeModal === 'events-hub') && (
        <div className="fixed inset-0 bg-neutral-950/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white text-black max-w-md w-full rounded-xl overflow-hidden shadow-2xl p-6 relative">
            <button onClick={closeModal} className="absolute top-4 right-4 text-neutral-400 hover:text-black">
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2.5 mb-4 text-[#00c853]">
              <Info className="w-6 h-6" />
              <h3 className="text-xl font-black uppercase tracking-tight">Crossroads Community</h3>
            </div>
            <p className="text-sm text-neutral-600 mb-6">
              Thank you for exploring this section! Crossroads is dedicated to offering healthy environments where you can grow. Get in touch with our administrators or visit us in person to join!
            </p>
            <button 
              onClick={closeModal} 
              className="w-full bg-[#00c853] text-white text-xs font-black uppercase py-3 rounded-lg hover:bg-[#00b047]"
            >
              Close Window
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
