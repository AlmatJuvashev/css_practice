import { useEffect, useState } from 'react';
import NavBar from '../../ui/NavBar';

function Header() {
  function handleSmoothTransition() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const sectionHeroEl = document.querySelector('#hero');

    const observer = new IntersectionObserver(
      function (entries) {
        const ent = entries[0];
        if (!ent.isIntersecting) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      },
      {
        // In the viewport
        root: null,
        threshold: 0,
        rootMargin: '-80px',
      }
    );

    observer.observe(sectionHeroEl);
  }, []);

  return (
    <header
      id="header"
      className={`bg-orange-100/95 h-10 px-3 md:max-lg:px-8 md:h-20 w-full flex items-center justify-between flex-wrap md:px-6 ${
        isSticky ? 'sticky top-0 z-[20]' : ''
      }`}
    >
      <a
        className="hover:cursor-pointer"
        onClick={() => handleSmoothTransition()}
      >
        <img
          src="/img_omnifood/omnifood-logo.png"
          alt="Omnifood logo"
          className="h-5"
        />
      </a>
      <NavBar />
    </header>
  );
}

export default Header;
