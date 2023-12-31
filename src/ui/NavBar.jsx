import { IoCloseOutline, IoMenuOutline } from 'react-icons/io5';
import Navlinks from './NavLinks';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Button from './Button';

function NavBar() {
  const [isOpen, setIsOpen] = useState();
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  function toggleNavBar() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    if (!isMobile) setIsOpen(false);
  }, [isMobile]);

  function handleSmoothScroll(sec_name) {
    const sectionEl = document.querySelector(`#${sec_name}`);
    sectionEl.scrollIntoView({ behavior: 'smooth' });

    if (isMobile) setIsOpen(!isOpen);
  }

  return (
    <>
      <nav className="md:flex md:items-center md:justify-between">
        <ul className="hidden md:flex  md:items-center md:gap-5 md:font-medium">
          <Navlinks onClick={handleSmoothScroll} />
        </ul>
        <div>
          <Button
            size={isMobile ? 'lg' : 'md'}
            type="navlink"
            onClick={toggleNavBar}
            className="md:hidden bg-transparent absolute z-50 top-0 right-0"
          >
            {isOpen ? (
              <IoCloseOutline className="stroke-stone-800" />
            ) : (
              <IoMenuOutline className="stroke-stone-800" />
            )}
          </Button>
        </div>
      </nav>
      {isOpen && (
        <MobileNavBarView handleSmoothScroll={handleSmoothScroll} />
        // <nav className="basis-full">
        //   <ul className="flex flex-col items-center gap-4">
        //     <Navlinks onClick={handleSmoothScroll} />
        //   </ul>
        // </nav>
      )}
    </>
  );
}

function MobileNavBarView({ handleSmoothScroll }) {
  return (
    <nav className="absolute top-0 left-0 bg-stone-50/80 z-30 w-full h-screen flex flex-col justify-center backdrop-blur-sm">
      <ul className="flex flex-col items-center justify-center gap-10 text-2xl">
        <Navlinks onClick={handleSmoothScroll} />
      </ul>
    </nav>
  );
}

export default NavBar;
