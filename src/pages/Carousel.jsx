import { useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const slides = [
  {
    img: { src: 'maria.jpg', alt: 'Some picture' },
    quote:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et illum\
  fugiat, aliquam labore itaque, hic dicta culpa eum in, rerum dolore!\
  Maiores nam earum id numquam, quasi magni iste fugiat!',
    author: 'Maria Magdalena',
    position: 'Senior Product Manager at EDP Commercial',
  },
  {
    img: { src: 'mark_twain.jpeg', alt: 'Some picture' },
    quote:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere et, praesentium ipsa sint sed accusamus explicabo fugit repellat! Natus in magnam dolore tempora eveniet cupiditate deleniti repellat, porro voluptatibus id?',
    author: 'Mark Twain',
    position: 'Senior Software Architecture at EDP Commercial',
  },
  {
    img: { src: 'obama.jpeg', alt: 'Some picture' },
    quote:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, distinctio. Eligendi id, error laboriosam perspiciatis quo maiores earum facere debitis vitae in, aut a facilis aspernatur iure, officiis minus repellendus.',
    author: 'Barak Obama',
    position: '43rd President of the USA',
  },
];

function Carousel() {
  const [current, setCurrent] = useState(0);

  function prevSlide() {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent((current) => current - 1);
  }

  function nextSlide() {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent((current) => current + 1);
  }
  console.log(current);

  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="w-[800px] m-auto relative">
        <div className="overflow-hidden">
          {/* Inline flex that will expand to the children's width */}
          <div
            className="inline-flex h-[320px] py-6 transition ease-out duration-400"
            style={{
              transform: `translateX(-${(current * 100) / slides.length}%)`,
            }}
          >
            {slides.map((slide, idx) => (
              <div
                key={idx}
                className={`bg-green-700 rounded-lg text-gray-200 p-8 pl-24 pr-12 text-left flex items-center gap-24 w-[800px]`}
              >
                {/* Scale Image 150 to overflow container */}
                <img
                  src={slide.img.src}
                  alt={slide.img.alt}
                  className="h-[200px] w-[200px] scale-150 rounded-lg shadow-xl object-cover"
                />
                <blockquote>
                  <p className="text-lg font-medium leading-6">{slide.quote}</p>
                  <p className="text-sm mt-8 text-green-200">{slide.author}</p>
                  <p className="text-xs mt-1 text-green-200">
                    {slide.position}
                  </p>
                </blockquote>
              </div>
            ))}
          </div>

          <button
            className="h-10 w-10 absolute rounded-full flex items-center justify-center p-1 left-0 -translate-x-1/2 border-none shadow-lg hover:shadow-xl top-1/2 -translate-y-1/2 focus:shadow-sm focus:outline-none"
            onClick={prevSlide}
          >
            <HiChevronLeft className="h-7 w-7 text-green-600" />
          </button>
          <button
            className="h-10 w-10 p-1 absolute rounded-full flex items-center justify-center right-0 translate-x-1/2 top-1/2 -translate-y-1/2  border-none shadow-lg hover:shadow-xl focus:shadow-sm focus:outline-none"
            onClick={nextSlide}
          >
            <HiChevronRight className="h-7 w-7 text-green-600" />
          </button>
          <div className="absolute flex gap-1 -bottom-10 left-1/2 -translate-x-1/2">
            {slides.map((slide, idx) => (
              <div
                key={idx}
                className={`h-3 w-3 border-2 border-green-600 rounded-full ${
                  idx === current ? 'bg-green-600' : 'bg-gray-50'
                }`}
              >
                &nbsp;
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link to="/home">Back to home page</Link>
      </div>
    </div>
  );
}

export default Carousel;
