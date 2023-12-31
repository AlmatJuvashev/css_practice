import Heading from '../../ui/Heading';
import { motion, useAnimationControls } from 'framer-motion';
import AnimatedButton from '../../ui/AnimatedButton';

function Header() {
  const controls = useAnimationControls();

  function handleClick() {
    console.log('button pressed');
    controls.start({
      y: 0,
      boxShadow: '0 5px 10px -10px rgb(0,0,0,0.2)',
      transition: { type: 'spring' },
    });
  }

  return (
    <motion.header
      layout
      className="h-[95vh]
    bg-hero-natours bg-cover bg-top clip-bottom-right relative"
    >
      <div className="absolute top-10 left-10">
        <img src="/img_natours/logo-white.png" alt="logo" className="h-9" />
      </div>
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <Heading
          type="h1"
          customizeColor={true}
          className="text-gray-100 uppercase"
        >
          <motion.span
            className="block tracking-[35px]"
            initial={{ opacity: 0 }}
            animate={{ x: [-100, 100, 0], opacity: 1 }}
            drag="x"
            dragConstraints={{ left: -100, right: 100 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 2,
              type: 'spring',
            }}
          >
            Outdoors
          </motion.span>
          <motion.span
            className="block text-xl tracking-[18px] mt-5"
            animate={{ x: [100, -100, 0] }}
            drag="x"
            dragConstraints={{ left: -50, right: 50 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 2,
              type: 'spring',
            }}
          >
            is where life happens
          </motion.span>
        </Heading>
        <div>
          <AnimatedButton
            type="custom"
            size="custom"
            className="uppercase text-lg font-semibold md:mt-10 text-gray-700 bg-gray-100 md:px-10 md:py-5 rounded-full shadow-md"
            whileHover={{
              y: -10,
              boxShadow: '0 35px 60px -15px rgba(0, 0, 0, 0.2)',
              transition: { type: 'spring', delay: 0.1 },
            }}
            // exit={{
            //   y: 0,
            // }}
            animate={controls}
            // whileInView={{
            //   opacity: 1,
            //   y: 0,
            //   transition: { type: 'spring', duration: 2 },
            // }}
            onClick={handleClick}
          >
            Discover our tours
          </AnimatedButton>
        </div>
      </div>
    </motion.header>
  );
}

export default Header;
