import { twJoin } from 'tailwind-merge';
import { useNatourData } from '../../context/NatoursProvider';
import Heading from '../../ui/Heading';
import { headerHover } from './AnimationVariables';
import FlipCard from '../../ui/FlipCard';
import AnimatedButton from '../../ui/AnimatedButton';
import { useAnimationControls } from 'framer-motion';

function PopularTours() {
  const { popular_tours } = useNatourData();

  const controls = useAnimationControls();

  function handleClick() {
    console.log('button pressed');
    controls.start({
      y: 0,
      boxShadow: '0 5px 10px -10px rgb(0,0,0,0.2)',
      transition: { type: 'spring' },
    });
  }

  function renderBgColors(cat, hasOpacity = false) {
    if (cat === 'sea' && hasOpacity) {
      return 'rgba(var(--secondary-natours-light), .85), rgba(var(--secondary-natours-dark), .85)';
    } else if (cat === 'sea' && !hasOpacity) {
      return 'var(--secondary-natours-light), var(--secondary-natours-dark)';
    }

    if (cat === 'forest' && hasOpacity) {
      return 'rgba(var(--primary-natours-light), .85), rgba(var(--primary-natours-dark), .85)';
    } else if (cat === 'forest' && !hasOpacity) {
      return 'var(--primary-natours-light), var(--primary-natours-dark)';
    }

    if (hasOpacity) {
      return 'rgba(var(--tertiary-natours-light), .85), rgba(var(--tertiary-natours-dark), .85)';
    } else {
      return 'var(--tertiary-natours-light), var(--tertiary-natours-dark)';
    }
  }

  return (
    <section className="bg-gray-200 -mt-20 pt-24">
      <div className="p-20 max-w-5xl mx-auto">
        <Heading
          type="h2"
          className="text-center text-transparent bg-clip-text bg-gradient-to-br from-green-500 to-green-800 uppercase"
          whileHover={headerHover}
        >
          Most popular tours
        </Heading>
        <div className="grid grid-cols-3 mt-20">
          {popular_tours.map((tour, idx) => (
            <FlipCard
              key={idx}
              className="h-[350px] w-[220px] hover:cursor-pointer"
            >
              <FlipCard.InnerCard id={idx} className="">
                <FlipCard.FrontCard className="rounded-lg shadow-lg overflow-hidden">
                  <div className="relative">
                    <div
                      className={twJoin([
                        'w-full h-[10rem] bg-center bg-cover bg-blend-screen',
                        // tour.img_src,
                        'clip-bottom-right',
                      ])}
                      style={{
                        backgroundImage:
                          'linear-gradient(to right bottom, ' +
                          renderBgColors(tour.cat) +
                          ')' +
                          ', url(' +
                          tour.img_src +
                          ')',
                      }}
                    />
                    <div className="absolute bottom-4 right-1 text-right  w-2/3 z-2000">
                      <Heading
                        type="h3"
                        customizeSize={true}
                        className="texg-2xl text-white font-semibold uppercase p-2 box-decoration-clone inline bg-gradient-to-r from-cyan-500 to-blue-500"
                        // style={{
                        //   backgroundColor:
                        //     'linear-gradient(to right bottom, ' +
                        //     renderBgColors(tour.cat) +
                        //     ')',
                        // }}
                        dangerouslySetInnerHTML={{ __html: tour.title }}
                      >
                        {/* {tour.title} */}
                      </Heading>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-4 p-6">
                    {tour.description.map((desc, idx2) => (
                      <p key={idx2}>{desc}</p>
                    ))}
                  </div>
                </FlipCard.FrontCard>
                <FlipCard.BackCard
                  className={twJoin([
                    'rounded-lg  px-12 text-center bg-gradient-to-r overflow-hidden flex flex-col items-center justify-center text-white',
                    tour.cat === 'winter'
                      ? 'from-cyan-500 to-blue-500'
                      : tour.cat === 'forest'
                      ? 'from-lime-500 to-emerald-500'
                      : 'from-amber-500 to-yellow-500',
                  ])}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </FlipCard.BackCard>
              </FlipCard.InnerCard>
            </FlipCard>
          ))}
        </div>
        <div className="flex justify-center">
          <AnimatedButton
            type="custom"
            size="custom"
            className="uppercase text-lg font-semibold md:mt-10 text-gray-100 bg-green-700 md:px-4 md:py-2 rounded-full shadow-md"
            whileHover={{
              y: -10,
              boxShadow: '0 35px 60px -15px rgba(0, 0, 0, 0.2)',
              transition: { type: 'spring', delay: 0.1 },
            }}
            animate={controls}
            onClick={handleClick}
          >
            Discover all tours
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
}

export default PopularTours;
