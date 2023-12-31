import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
} from 'react-icons/io5';
import { useOmnifood } from '../../context/OmnifoodProvider';

function Footer() {
  const { footer_links } = useOmnifood();

  const currentYear = new Date().getFullYear();

  function handleSmoothTransition() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <footer className="mt-20 py-28 border-t border-stone-100">
      <div className="px-8 container mx-auto max-w-6xl grid max-md:grid-cols-6 md:grid-cols-[1.5fr_1.5fr_1fr_1fr_1fr] gap-10 sm:gap-20 text-left">
        <div className="flex flex-col max-md:col-span-3">
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
          <ul className="mt-11 flex items-center gap-5 ">
            <li>
              <a
                href="#"
                className="font-light text-stone-600 hover:text-stone-950 hover:font-medium transition-all"
              >
                <IoLogoInstagram className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-light text-stone-600 hover:text-stone-950 hover:font-medium transition-all"
              >
                <IoLogoFacebook className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-light text-stone-600 hover:text-stone-950 hover:font-medium transition-all"
              >
                <IoLogoTwitter className="w-6 h-6" />
              </a>
            </li>
          </ul>
          <p className="mt-auto font-light text-stone-600 text-sm">
            Copyright &copy; by {currentYear}, by AJ Inc. All rights reserved
          </p>
        </div>
        <div className="max-md:col-span-3">
          <p className="text-lg font-medium">Contact us</p>
          <address className="mt-9 text-sm font-light text-stone-600">
            <p>623 Harrison St., 2nd Floor, San Francisco, CA 94107</p>
            <p className="mt-[60px]">
              <a
                href="tel:415-201-6370 "
                className="text-sm font-light text-stone-600 hover:text-stone-950 hover:font-medium transition-all"
              >
                415-201-6370{' '}
              </a>
              <a
                href="mailto:test@example.com"
                className="text-sm font-light text-stone-600 hover:text-stone-950 hover:font-medium transition-all"
              >
                hello@omnifood.com
              </a>
            </p>
          </address>
        </div>
        {footer_links.map((footer_link, idx) => (
          <nav key={idx} className="max-md:row-start-1 max-md:col-span-2">
            <p className="text-lg font-medium">{footer_link.group}</p>
            <ul className="mt-8 flex flex-col gap-4 justify-start">
              {footer_link.links.map((link, idx2) => (
                <li key={idx2}>
                  <a
                    href="#"
                    className="text-sm font-light text-stone-600 hover:text-stone-950 hover:font-medium transition-all"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
