// Sidebar.js - Responsive sidebar navigation for the portfolio
// Handles navigation, scroll spy, collapse/expand, social links, and advanced scroll-hide/floating icon behavior

import React, { useState, useEffect, useRef } from 'react';

// Icon components
const HomeIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const UserIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const CodeIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const FolderIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-5l-2-2H5a2 2 0 00-2 2z" />
  </svg>
);

const CertificateIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
);

const BlogIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
  </svg>
);

const ContactIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a3 3 0 003.22 0L22 8" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
  </svg>
);

const MenuIcon = ({ color = 'currentColor' }) => (
  <svg className="w-6 h-6" fill="none" stroke={color} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = ({ color = 'currentColor' }) => (
  <svg className="w-6 h-6" fill="none" stroke={color} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const GitHubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99 0 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.5.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
  </svg>
);

const Sidebar = ({ onCollapse, onVisibilityChange }) => {
  // State for active section (scroll spy)
  const [activeSection, setActiveSection] = useState('hero');
  // State for sidebar collapse (desktop)
  const [isCollapsed, setIsCollapsed] = useState(false);
  // State for mobile menu open/close
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // State for scroll-hide logic
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  // State for screen size detection
  const [isMobile, setIsMobile] = useState(false);
  const scrollTimeout = useRef(null);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after click
  };

  // Handle screen size changes and scroll spy
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    const handleScroll = () => {
      // Only hide sidebar on desktop when scrolling
      if (!isMobile) {
        setIsSidebarVisible(false);
        if (onVisibilityChange) onVisibilityChange(false);
        // Reset timer to show sidebar/header after scrolling stops
        if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
        scrollTimeout.current = setTimeout(() => {
          setIsSidebarVisible(true);
          if (onVisibilityChange) onVisibilityChange(true);
        }, 600); // 600ms after scroll stops
      }

  // Scroll spy logic
      const sections = ['hero', 'about', 'services', 'projects', 'certifications', 'blog', 'contact', 'footer'];
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    // Initial screen size check
    handleResize();
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, [onVisibilityChange, isMobile]);

  // Navigation items for sidebar
  const navItems = [
    { id: 'hero', label: 'Home', icon: <HomeIcon /> },
    { id: 'about', label: 'About', icon: <UserIcon /> },
    { id: 'services', label: 'Services', icon: <CodeIcon /> },
    { id: 'projects', label: 'Projects', icon: <FolderIcon /> },
    { id: 'certifications', label: 'Certifications', icon: <CertificateIcon /> },
    { id: 'blog', label: 'Blog', icon: <BlogIcon /> },
    { id: 'contact', label: 'Contact', icon: <ContactIcon /> },
  ];

  // Mobile menu overlay component
  const MobileMenuOverlay = () => (
    <div className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300 ${
      isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`} onClick={() => setIsMobileMenuOpen(false)} />
  );

  // Find the active nav item for floating icon
  const activeNavItem = navItems.find(item => item.id === activeSection);

  // Responsive: show sidebar (desktop) or header (mobile)
  return (
    <>
      {/* Mobile menu overlay */}
      <MobileMenuOverlay />
      {/* Mobile menu button (hamburger) */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className={`fixed top-2 left-2 z-50 lg:hidden bg-purple-600 text-white p-3 rounded-lg shadow-lg hover:bg-purple-700 transition ${isMobile ? (isSidebarVisible ? '' : 'hidden') : 'hidden'}`}
        aria-label="Open navigation menu"
      >
        {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
      </button>
      {/* Desktop toggle button (collapse/expand) */}
      <button
        onClick={() => {
          setIsCollapsed((prev) => {
            const next = !prev;
            if (onCollapse) onCollapse(next);
            return next;
          });
        }}
        className={`fixed top-8 left-4 z-50 hidden lg:block bg-white text-purple-700 p-3 rounded-lg shadow-lg hover:bg-purple-100 transition border border-purple-200 ${isSidebarVisible ? '' : 'hidden'}`}
        style={{ zIndex: 60 }}
        aria-label="Toggle sidebar"
      >
        <MenuIcon color="#9333ea" />
      </button>
      {/* Sidebar navigation (desktop) */}
      <nav className={`fixed top-0 left-0 h-full bg-gradient-to-b from-purple-900 via-black to-black shadow-2xl flex flex-col z-50 transition-all duration-300 ${
        isCollapsed ? 'w-12 sm:w-16' : 'w-16 sm:w-48 md:w-64'
      } ${
        // Mobile: only show when menu is open, Desktop: always show (unless hidden by scroll)
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`} style={{ 
        // On mobile: only show when menu is open, on desktop: show based on scroll visibility
        display: isMobile 
          ? (isMobileMenuOpen ? 'flex' : 'none')
          : (isSidebarVisible ? 'flex' : 'none'),
        // Ensure mobile sidebar has proper width
        width: isMobile && isMobileMenuOpen ? '280px' : undefined
      }}>
        {/* Logo section */}
        <div className={`flex flex-col items-center border-b border-purple-700/30 ${
          isCollapsed ? 'px-1 sm:px-2' : 'px-2 sm:px-4'
        } mt-8 sm:mt-16 lg:mt-20 py-4 sm:py-8`}>
          <img 
            src={process.env.PUBLIC_URL + '/logo.png'} 
            alt="CAXIE Logo" 
            className={`object-contain mb-3 sm:mb-6 transition-all duration-300 ${
              isCollapsed ? 'w-7 h-7 sm:w-9 sm:h-9' : 'w-20 h-auto sm:w-36'
            }`}
            style={{ filter: 'invert(1) brightness(2)' }} 
          />
          {!isCollapsed && (
            <h3 className="text-white font-semibold text-xs sm:text-sm opacity-80">CAXIE Technologies</h3>
          )}
        </div>
        {/* Navigation links */}
        <div className="flex-1 py-3 sm:py-6 overflow-y-auto">
          <ul className={`space-y-1 sm:space-y-2 ${
            isCollapsed ? 'px-1 sm:px-2' : 'px-2 sm:px-4'
          }`}>
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center gap-2 sm:gap-3 px-2 sm:px-4 py-2 sm:py-3 rounded-lg text-left transition-all duration-300 group ${
                    activeSection === item.id
                      ? 'bg-purple-600 text-white shadow-lg'
                      : 'text-gray-300 hover:bg-purple-800/50 hover:text-white'
                  } ${isMobile ? 'text-sm' : 'text-xs sm:text-base'}`}
                  title={isCollapsed ? item.label : ''}
                >
                  <span className={`flex-shrink-0 transition-transform duration-300 group-hover:scale-110 ${
                    activeSection === item.id ? 'text-white' : 'text-purple-400'
                  }`}
                  style={{ fontSize: '1.2rem' }}>
                    {item.icon}
                  </span>
                  {!isCollapsed && (
                    <>
                      <span className="font-medium truncate flex-1 min-w-0">{item.label}</span>
                      {activeSection === item.id && (
                        <div className="ml-auto w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse flex-shrink-0"></div>
                      )}
                    </>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
        {/* Social links footer */}
        <div className={`border-t border-purple-700/30 py-3 sm:py-6 ${
          isCollapsed ? 'px-1 sm:px-2' : 'px-2 sm:px-4'
        }`}>
          {!isCollapsed && (
            <h4 className="text-white font-semibold text-xs sm:text-sm mb-2 sm:mb-4 text-center opacity-80">Connect With Us</h4>
          )}
          <div className={`flex ${
            isCollapsed ? 'flex-col space-y-2 sm:space-y-4' : 'justify-center space-x-2 sm:space-x-4'
          }`}>
            {/* GitHub, LinkedIn, Instagram icons */}
            <a
              href="https://github.com/Charles5247"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110"
              aria-label="GitHub"
              title={isCollapsed ? 'GitHub' : ''}
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/charles-xavier-ekechukwuemeka-01185a1a5/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110"
              aria-label="LinkedIn"
              title={isCollapsed ? 'LinkedIn' : ''}
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://www.instagram.com/iamxavi_too/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110"
              aria-label="Instagram"
              title={isCollapsed ? 'Instagram' : ''}
            >
              <InstagramIcon />
            </a>
          </div>
          {/* WhatsApp chat link */}
          {!isCollapsed && (
            <div className="mt-2 sm:mt-4 text-center">
              <a
                href="https://wa.me/2349014921243"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-purple-400 hover:text-white transition-colors duration-300"
              >
                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.151-.174.2-.298.3-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.363.71.306 1.263.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 6.107h-.001a9.87 9.87 0 01-4.988-1.357l-.357-.213-3.714.982.993-3.617-.232-.372A9.86 9.86 0 012.1 11.893C2.073 6.728 6.659 2.1 12 2.1c2.637 0 5.112 1.027 6.988 2.893A9.825 9.825 0 0121.9 12c.003 5.373-4.584 9.99-9.849 9.99zm8.413-18.403A11.815 11.815 0 0012 0C5.383 0 0 5.383 0 12c0 2.121.555 4.197 1.607 6.032L.057 23.944a1.001 1.001 0 001.212 1.212l5.912-1.55A11.933 11.933 0 0012 24c6.617 0 12-5.383 12-12 0-3.192-1.246-6.191-3.536-8.486z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          )}
        </div>
      </nav>
      {/* Floating active icon when sidebar/header is hidden */}
      {!isSidebarVisible && activeNavItem && (
        <div
          className="fixed z-[999] flex items-center justify-center bg-white shadow-lg rounded-full border-2 border-purple-500 transition-all duration-300"
          style={{
            left: isMobile ? '50%' : '1.5rem',
            top: isMobile ? '1rem' : '1.5rem',
            width: window.innerWidth < 640 ? 40 : 56,
            height: window.innerWidth < 640 ? 40 : 56,
            transform: isMobile ? 'translateX(-50%)' : 'none',
          }}
        >
          <span className="text-purple-600 text-2xl sm:text-3xl">
            {activeNavItem.icon}
          </span>
        </div>
      )}
    </>
  );
};

export default Sidebar; 