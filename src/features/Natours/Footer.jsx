import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-700 text-gray-100 p-32">
      <div>
        <img
          src="/img_natours/logo-green-2x.png"
          alt="logo"
          className="w-32 mx-auto"
        />
      </div>
      <div className="grid grid-cols-2 gap-32 items-start mt-20">
        <ul className="ml-auto text-center border-t border-gray-400 [&>*]:inline-block [&>*]:mx-3 [&>*:hover]:-pt-0 pt-3 transition-all">
          <li className="hover:text-lg transition-all">
            <a href="">Company</a>
          </li>
          <li className="hover:text-lg transition-all">
            <a href="">Carrier</a>
          </li>
          <li className="hover:text-lg transition-all">
            <a href="">Contact us</a>
          </li>
          <li className="hover:text-lg transition-all">
            <a href="">Privacy policy</a>
          </li>
          <li className="hover:text-lg transition-all">
            <a href="">Terms</a>
          </li>
        </ul>
        <div className="border-t border-gray-400 pt-2">
          Go to <Link to="/home">Home Page</Link> for other css porjects.
          Copyright &copy; by Almat. You are 100% allowed to use this webpage
          for both personal and NOT to claim it as your own design. Credits to
          Jonas Shmedtann Advanced CSS and Sass course.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
