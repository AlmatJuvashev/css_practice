import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <h1>Components</h1>
      <div>
        <ul className="mt-10 flex flex-col gap-3">
          <li>
            <Link to="/accordion">Accordion</Link>
          </li>
          <li>
            <Link to="/carousel">Carousel</Link>
          </li>
          <li>
            <Link to="/table">Table</Link>
          </li>
          <li>
            <Link to="/hero">Hero</Link>
          </li>
          <li>
            <Link to="/layout">App Layout</Link>
          </li>
          <li>
            <Link to="/food">Omnifood Project</Link>
          </li>
          <li>
            <Link to="/tours">Natours Project</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
