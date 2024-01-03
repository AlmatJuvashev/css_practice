import AnimatedButton from '../../ui/AnimatedButton';
import Card from '../../ui/Card';
import Heading from '../../ui/Heading';
import { headerHover } from './AnimationVariables';
import { motion, useAnimationControls } from 'framer-motion';

function Stories() {
  // ANIMATED BUTTON CONTROLS
  const controls = useAnimationControls();

  function handleClick() {
    controls.start({
      y: 0,
      // boxShadow: '0 2.5px 5px rgba(0,0,0,0.2)',
      transition: { type: 'spring' },
    });
  }

  // Image and Text Motion
  const textMotion = {
    rest: {
      opacity: 0,
      y: '50%',
      x: '-50%',
      transition: {
        duration: 2,
        type: 'tween',
        ease: 'easeIn',
      },
    },
    hover: {
      opacity: 1,
      y: '-50%',
      x: '-50%',
      transition: {
        duration: 0.4,
        type: 'tween',
        ease: 'easeOut',
      },
    },
  };
  const imageMotion = {
    rest: {
      filter: 'blur(0px)',
      scale: 1,
    },
    hover: {
      filter: 'blur(3px)',
      scale: 1.2,
      transition: {
        duration: 0.4,
        type: 'tween',
        ease: 'easeIn',
      },
    },
  };

  return (
    <section className="relative">
      <div className="absolute top-0 left-0 w-full h-full -z-20 blur-sm opacity-20">
        <video autoPlay muted loop className="h-full w-full object-cover">
          <source src="img_natours/video.mp4" type="video/mp4"></source>
          <source src="img_natours/video.webm" type="video/webm"></source>
          Your browser is not supported
        </video>
      </div>
      <div className="p-10 py-20">
        <div>
          <Heading
            type="h2"
            className="text-center text-transparent bg-clip-text bg-gradient-to-br from-green-500 to-green-800 uppercase"
            whileHover={headerHover}
          >
            We make people genuinely happy
          </Heading>
        </div>
        <div className="mt-16 flex flex-col items-center [&>*]:-skew-x-12">
          <Card className="bg-gray-100/50 p-10 w-2/3 [&>*]:skew-x-12">
            <motion.div className="pl-8">
              <motion.figure
                className="h-36 w-36 float-left [shape-outside:circle(50%_at_50%_50%)] [clip-path:circle(50%_at_50%_50%)] -translate-x-5 relative group text-center"
                initial="rest"
                whileHover="hover"
                // animate="hover"
              >
                <motion.img
                  variants={imageMotion}
                  src="/img_natours/nat-8.jpg"
                  alt="customer review"
                  className="h-full bg-cover bg-center"
                />
                <motion.figcaption
                  variants={textMotion}
                  className="absolute top-1/2 left-1/2 w-full h-full text-xl text-gray-100 font-semibold flex items-center justify-center [clip-path:circle(50%_at_50%_50%)]"
                >
                  Mary Smith
                </motion.figcaption>
              </motion.figure>
              <div>
                <Heading type="h3" className="uppercase">
                  I had the best week with my family
                </Heading>
                <p className="mt-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  odio magni, minima tempore nihil molestias dolor cupiditate
                  iste accusamus exercitationem odit eveniet doloremque,
                  reiciendis deserunt eligendi laboriosam incidunt delectus non.
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
                  atque iure maiores eligendi.
                </p>
              </div>
            </motion.div>
          </Card>
        </div>
        <div className="mt-16 flex flex-col items-center [&>*]:-skew-x-12">
          <Card className="bg-gray-100/50 p-10 w-2/3 [&>*]:skew-x-12">
            <div className="pl-8">
              <motion.figure
                className="h-36 w-36 float-left [shape-outside:circle(50%_at_50%_50%)] [clip-path:circle(50%_at_50%_50%)] -translate-x-5 relative group text-center"
                initial="rest"
                whileHover="hover"
                // animate="hover"
              >
                <motion.img
                  variants={imageMotion}
                  src="/img_natours/nat-9.jpg"
                  alt="customer review"
                  className="h-full bg-cover bg-center"
                />
                <motion.figcaption
                  variants={textMotion}
                  className="absolute top-1/2 left-1/2 w-full h-full text-xl text-gray-100 font-semibold flex items-center justify-center [clip-path:circle(50%_at_50%_50%)]"
                >
                  John Doe
                </motion.figcaption>
              </motion.figure>
              <div>
                <Heading type="h3" className="uppercase">
                  Wow my life is completely different now
                </Heading>
                <p className="mt-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  odio magni, minima tempore nihil molestias dolor cupiditate
                  iste accusamus exercitationem odit eveniet doloremque,
                  reiciendis deserunt eligendi laboriosam incidunt delectus non.
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
                  atque iure maiores eligendi.
                </p>
              </div>
            </div>
          </Card>
          <div className="mt-10">
            <AnimatedButton
              type="custom"
              size="custom"
              className="text-xl py-2 pl-2 pr-3 rounded-none text-green-600 border-b border-green-700 text-left bg-none"
              whileHover={{
                y: -10,
                // boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
                transition: { type: 'spring' },
                // backgroundColor: 'var(--primary-natour)',
                borderBottom: 'var(--primary-natour)',
                color: 'var(--primary-natour)',
                borderRadius: '0.5rem',
              }}
              initial={{
                borderRadius: '0px',
              }}
              exit={{
                borderBottom: '1px solid var(--primary-natour)',
              }}
              animate={controls}
              onClick={handleClick}
            >
              Learn more &rarr;
            </AnimatedButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stories;
