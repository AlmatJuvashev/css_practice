import { useOmnifood } from '../../context/OmnifoodProvider';
import Heading from '../../ui/Heading';

function Testimonials() {
  const { customer_testimonials } = useOmnifood();

  const gallery_photos = Array(12).fill(null);

  return (
    <section
      className="grid md:grid-cols-1 xl:grid-cols-[55fr_45fr] items-center text-left  bg-orange-100 p-4"
      id="testimonials"
    >
      <div className="p-20 md:max-xl:px-8">
        <Heading type="sub-heading">Testimonials</Heading>
        <Heading type="h2" className="mt-3">
          Once you try it, you cant go back
        </Heading>
        <div className="grid sm:grid-cols-2 max-sm:gap-y-10 sm:gap-y-5 sm:gap-x-14 mt-10">
          {customer_testimonials.map((el, idx) => (
            <figure key={idx}>
              <img
                src={`/img_omnifood/customers/${el.img_src}`}
                alt={`Photo of customer - ${el.customer_name}`}
                className="w-16 rounded-full"
              />
              <blockquote className="mt-4 text-lg">{el.testimonial}</blockquote>
              <p className="mt-4 text-stone-600">&mdash; {el.customer_name}</p>
            </figure>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-4 sm:max-lg:grid-cols-6 lg:grid-cols-3 gap-4">
        {gallery_photos.map((el, idx) => (
          <figure key={idx} className="overflow-hidden">
            <img
              src={`/img_omnifood/gallery/gallery-${idx + 1}.jpg`}
              alt={`Photos of beatifully arragned food: ${idx + 1}`}
              className="w-full hover:scale-110 transition-all"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
