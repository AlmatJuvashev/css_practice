import {
  FaWpexplorer,
  FaRegHeart,
  FaRegCompass,
  FaRegMap,
} from 'react-icons/fa';

import { motion } from 'framer-motion';
import Heading from '../../ui/Heading';

function Features() {
  const cards_info = [
    {
      icon: FaWpexplorer,
      title: 'Explore the world',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, non.',
    },
    {
      icon: FaRegCompass,
      title: 'Meet nature',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, impedit? ',
    },
    {
      icon: FaRegMap,
      title: 'Find your way',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, id!',
    },
    {
      icon: FaRegHeart,
      title: 'Live a healthier life',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, id!',
    },
  ];

  return (
    <section className="-mt-20">
      <div className="h-[800px] bg-features-natours bg-top bg-cover px-20 -skew-y-6 [&>*]:skew-y-6 flex items-center">
        <div className="grid grid-cols-4 items-center text-center gap-10">
          {cards_info.map((el, idx) => {
            return (
              <motion.div
                key={idx}
                className="flex flex-col gap-3 items-center bg-gray-100/50 px-4 py-10"
                whileHover={{
                  scale: 1.05,
                  y: -10,
                }}
              >
                <div className="bg-clip-text bg-gradient-to-br from-white to-green-800">
                  {<el.icon className="h-12 w-12 text-green-300" />}
                </div>
                <Heading
                  type="h3"
                  customizeSize={true}
                  className="text-lg mt-5 uppercase"
                >
                  {el.title}
                </Heading>
                <div className="mt-3">{el.text}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;
