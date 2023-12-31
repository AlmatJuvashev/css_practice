import { useOmnifood } from '../../context/OmnifoodProvider';
import Heading from '../../ui/Heading';

function Description() {
  const { description_list } = useOmnifood();

  return (
    <section id="how" className="py-24 text-left">
      <div className="px-8 container mx-auto max-w-6xl">
        <Heading type="sub-heading">How it works</Heading>
        <Heading type="h2" className="mt-4">
          Your daily dose of health in 3 simple steps
        </Heading>
        <div className="px-8 py-8 container mx-auto max-w-6xl grid sm:grid-cols-2 gap-x-4 gap-y-20 items-center">
          {description_list.map((el, idx) =>
            idx % 2 === 0 ? (
              <>
                <div>
                  <p className="text-7xl font-medium text-gray-300">
                    0{idx + 1}
                  </p>
                  <Heading type="h3" className="mt-3">
                    {el.heading}
                  </Heading>
                  <p className="mt-3">{el.description}</p>
                </div>
                <div className="flex items-center justify-center relative before:block before:bg-orange-50 before:w-[60%] before:pb-[60%] before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:-z-50 after:block after:absolute after:bg-orange-100 after:w-[45%] after:pb-[45%] after:rounded-full after:-z-20 max-md:[&:nth-child(2)]:row-start-1 max-md:[&:nth-child(6)]:row-start-5 max-sm:translate-y-10">
                  <img
                    src={el.img_src}
                    alt="iPhone app reference screen"
                    className="w-1/3"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center justify-center relative before:block before:bg-orange-50 before:w-[60%] before:pb-[60%] before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:-z-50 after:block after:absolute after:bg-orange-100 after:w-[45%] after:pb-[45%] after:rounded-full after:-z-20 max-sm:translate-y-10">
                  <img
                    src={el.img_src}
                    alt="iPhone app reference screen"
                    className="w-1/3 bg-cover"
                  />
                </div>
                <div>
                  <p className="text-7xl font-medium text-gray-300">
                    0{idx + 1}
                  </p>
                  <Heading type="h3" className="mt-3">
                    {el.heading}
                  </Heading>
                  <p className="mt-3 text-lg">{el.description}</p>
                </div>
              </>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default Description;
