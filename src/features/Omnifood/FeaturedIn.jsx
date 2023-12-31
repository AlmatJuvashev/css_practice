import Heading from '../../ui/Heading';

function FeaturedIn() {
  const list_of_companies = [
    'techcrunch',
    'business-insider',
    'forbes',
    'the-new-york-times',
    'usa-today',
  ];

  return (
    <section className="py-14">
      <div className="px-8 container mx-auto max-w-6xl">
        <Heading type="h2" className="uppercase text-stone-500 text-lg">
          As featured in
        </Heading>
        <div className="flex justify-around items-center max-sm:flex-wrap gap-10 mt-10">
          {list_of_companies.map((el, idx) => (
            <img
              key={idx}
              src={`/img_omnifood/logos/${el}.png`}
              alt={`Logo of ${el}`}
              className="h-5 md:h-6 lg:h-8 brightness-0 opacity-50"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedIn;
