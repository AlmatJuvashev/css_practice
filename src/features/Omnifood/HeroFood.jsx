import Button from '../../ui/Button';
import Heading from '../../ui/Heading';

function HeroFood() {
  const customer_imgs = Array(6).fill(null);

  return (
    <section id="hero" className="bg-orange-100 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-20 lg:gap-14 items-center text-center lg:text-left lg:max-w-6xl xl:max-w-8xl my-0 mx-auto px-8">
        <div>
          <Heading type="h1" className="">
            A healthy meal delivered to your door, every single day
          </Heading>
          <p className="text-lg text-gray-700 mt-7">
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs.
          </p>
          <Button className="max-md:mt-8 mt-14 font-semibold">
            Start eating well
          </Button>
          <Button type="outlineOmnifood" className="max-lg:mt-3 ml-5">
            Learn more &darr;
          </Button>
          <div className="flex items-center sm:max-lg:justify-center max-lg:justify-around max-lg:flex-wrap gap-4 mt-8 md:mt-12 lg:mt-20">
            <div className="flex items-center">
              {customer_imgs.map((el, idx) => (
                <img
                  key={idx}
                  src={`/img_omnifood/customers/customer-${idx + 1}.jpg`}
                  alt="customer face"
                  className="h-12 w-12 rounded-full mr-[-1rem] last:mr-0 border-2 border-orange-100"
                />
              ))}
            </div>
            <p className="text-lg">
              {' '}
              <span className="text-orange-700 font-semibold">250,000+ </span>
              meals delivered last year!
            </p>
          </div>
        </div>
        <div className="max-lg:flex max-lg:justify-center max-lg:mt-3">
          <img
            src="/img_omnifood/hero.png"
            alt="hero image"
            className="w-3/5 lg:w-full "
          />
        </div>
      </div>
    </section>
  );
}

export default HeroFood;
