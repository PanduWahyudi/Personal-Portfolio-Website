import { useState } from "react";
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'id' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  const navLinks = [
    { href: "#about", label: t('navbar.about') },
    { href: "#skills", label: t('navbar.skills') },
    { href: "#project", label: t('navbar.project') },
    { href: "#contact", label: t('navbar.contact') },
  ];

  const handleSmoothScroll = (event, href) => {
    event.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });

      // Tambahkan penutupan menu mobile setelah scroll
      setIsMenuOpen(false);
    }
  };

  const renderLinks = (isMobile) =>
    navLinks.map(({ href, label }) => (
      <a
        key={href}
        href={href}
        onClick={(event) => handleSmoothScroll(event, href)}
        className={`${
          isMobile ? "block px-4 py-2" : ""
        } transition duration-300 hover:text-[#FF6464] text-xl`}
      >
        {label}
      </a>
    ));

  return (
    <nav className="bg-white text-[#21243D] font-bold fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Disini triger ganti bahasanya */}
          <button 
            onClick={toggleLanguage}
            className="inline-block text-xl"
          >
            {i18n.language === 'en' ? 'EN' : 'ID'}
          </button>
          {/* Hamburger Menu */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden focus:outline-none transition duration-300"
          >
            {isMenuOpen ? (
              <svg
                className="transform rotate-180 transition-transform duration-300"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                className="transition-transform duration-300"
                width="30"
                height="20"
                viewBox="0 0 30 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 1H30" stroke="currentColor" strokeWidth="1.6" />
                <path d="M0 10H30" stroke="currentColor" strokeWidth="1.6" />
                <path d="M0 19H30" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            )}
          </button>

          {/* Links (Desktop) */}
          <div className="hidden md:flex items-center space-x-8">
            {renderLinks(false)}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#FCFDF2] transition-all duration-300 ${
          isMenuOpen ? "max-h-screen py-4" : "max-h-0 overflow-hidden"
        } flex justify-center`}
      >
        <div className="space-y-2 text-center">{renderLinks(true)}</div>
      </div>
    </nav>
  );
};

export default Navbar;
