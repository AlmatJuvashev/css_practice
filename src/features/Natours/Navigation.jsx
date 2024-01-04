import { Link } from "react-router-dom";
import NavigationIcon from "../../ui/NavigationIcon";
import { useState } from "react";

function Navigation() {
  const navigation_sections = [
    { title: "About Natous", link: "/" },
    { title: "Your benefits", link: "/" },
    { title: "Popular tours", link: "/" },
    { title: "Stories", link: "/" },
    { title: "Book now", link: "/" },
  ];

  const [isOpen, setIsOpen] = useState();

  function handleOpen() {
    setIsOpen((open) => !open);
  }

  return (
    <div className="bg-gray-400">
      <NavigationIcon onClick={handleOpen} />
      <div className="h-[5rem] w-[5rem] z-[1000] fixed top-[6.5rem] right-[6.5rem] rounded-full bg-[radial-gradient(var(--primary-natours-light),var(--primary-natours-dark))]">
        &nbsp;
      </div>
      {isOpen && (
        <nav className="h-screen w-full fixed top-0 left-0 z-[1500] bg-[linear-gradient(210deg,var(--primary-natours-light),var(--primary-natours-dark))]">
          <ul className="absolute-center flex flex-col gap-10 items-center text-2xl">
            {navigation_sections.map((sec, idx) => (
              <li key={idx}>
                <Link
                  to={sec.link}
                  className="inline-block px-4 py-2 text-gray-50 uppercase bg-[linear-gradient(105deg,transparent_0%,transparent_50%,white_50%)] bg-[length:220%] hover:bg-[position:100%] hover:translate-x-2 transition-all"
                >
                  0{idx + 1} &nbsp; {sec.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}

export default Navigation;
