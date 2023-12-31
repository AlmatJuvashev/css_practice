import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="font-rubik ">
      <header className="h-screen relative bg-hero-image bg-cover bg-fixed text-gray-50">
        <nav className="text-xl font-bold flex justify-between pt-10 mx-auto w-[1200px]">
          <div className="">LOGO</div>
          <div className="">NAVIGATION</div>
        </nav>
        <div className="my-0 mx-auto w-[1200px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-1/2 text-left">
            <h1 className="text-6xl">
              A healthy meal delivered to your door, every single day
            </h1>
            <p className="mt-8 text-xl">
              The smart 365-days-per-year food subscription that will make you
              healthy again. Tailored to your personal tastes and nutritional
              needs
            </p>
            <div className="mt-12 text-xl font-semibold bg-orange-600 inline-block py-4 px-8 rounded-lg hover:shadow-lg">
              <a href="#" className="text-stone-50 hover:text-stone-100">
                Start eating well
              </a>
            </div>
            <div className="mt-10">
              <Link to="/home">Back to home page</Link>
            </div>
          </div>
        </div>
      </header>
      <section className="py-[96px]">
        <div className="my-0 mx-auto w-[1200px]">
          <h2 className="text-4xl">Some random text</h2>
          <p className="text-xl mt-11">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            voluptatum quod alias eos dolorem eius illo dolorum deleniti impedit
            maiores iure quo eveniet, ipsum, distinctio laudantium voluptate
            totam. Similique, facere!
          </p>
        </div>
      </section>
    </div>
  );
}

export default Hero;
