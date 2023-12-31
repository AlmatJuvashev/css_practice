import { Link } from 'react-router-dom';

function Navlinks({ onClick, className }) {
  const sections_names = ['How it works', 'Meals', 'Testimonials', 'Pricing'];

  const page_position = ['how', 'meals', 'testimonials', 'pricing'];

  return (
    <>
      {sections_names.map((el, idx) => (
        <li key={idx} className={className}>
          <a
            // href={`#${page_position[idx]}`}
            className="text-stone-600 hover:text-orange-700 hover:cursor-pointer"
            onClick={() => onClick(page_position[idx])}
          >
            {el}
          </a>
        </li>
      ))}

      <li>
        <Link
          to="/home"
          className="text-stone-100 bg-orange-700 hover:bg-orange-800 hover:transition-colors hover:text-stone-200 px-4 py-2 rounded-md"
        >
          Return Home
        </Link>
      </li>
    </>
  );
}

export default Navlinks;
