import { motion, useAnimationControls } from "framer-motion";
import AnimatedButton from "../../ui/AnimatedButton";
import Heading from "../../ui/Heading";
import { headerHover } from "./AnimationVariables";

function Tours() {
  const controls = useAnimationControls();

  const images = [
    {
      src: "nat-1-large.jpg",
      positionCss: "-top-[2rem] left-0",
    },
    {
      src: "nat-2-large.jpg",
      positionCss: "top-[2rem] right-0",
    },
    {
      src: "nat-3-large.jpg",
      positionCss: "top-[10rem] left-[20%]",
    },
  ];

  function handleClick() {
    controls.start({
      y: 0,
      boxShadow: "0 2.5px 5px rgba(0,0,0,0.2)",
      transition: { type: "spring" },
    });
  }

  return (
    <section className="-mt-[20vh] py-[15rem]  px-20 bg-gray-200">
      <div>
        <Heading
          type="h2"
          className="text-center text-transparent bg-clip-text bg-gradient-to-br from-green-500 to-green-800 uppercase"
          whileHover={headerHover}
        >
          Exciting Tours for Adventurous people
        </Heading>
      </div>
      <div className="mt-10 p-20 grid grid-cols-2 gap-10">
        <div className="flex flex-col gap-5">
          <div>
            <Heading
              type="h3"
              customizeColor={true}
              className="text-gray-600 uppercase"
            >
              You are going to fall in love with nature
            </Heading>
            <div className="mt-6 text-gray-500 font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              sed maiores odit. Fugiat, repellat? Ea minima laudantium sunt quo
              odit distinctio error accusamus culpa numquam sint tenetur animi,
              eum fugiat!
            </div>
          </div>
          <div>
            <Heading
              type="h3"
              customizeColor={true}
              className="text-gray-600 uppercase"
            >
              Live adventures like you have never been before
            </Heading>
            <div className="mt-6 text-gray-500 font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              sed maiores odit. Fugiat, repellat? Ea minima laudantium sunt quo
              odit distinctio error accusamus culpa numquam sint tenetur animi,
              eum fugiat!
            </div>
          </div>
          <div className="text-left">
            <AnimatedButton
              type="custom"
              size="custom"
              className="text-xl py-2 pl-2 pr-3 bg-gray-200 rounded-none text-green-600 border-b border-green-700 text-left"
              whileHover={{
                y: -10,
                boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
                transition: { type: "spring" },
                backgroundColor: "var(--primary-natour)",
                borderBottom: "var(--primary-natour)",
                color: "var(--color-white)",
                borderRadius: "0.5rem",
              }}
              initial={{
                borderRadius: "0px",
              }}
              exit={{
                borderBottom: "1px solid var(--primary-natour)",
              }}
              animate={controls}
              onClick={handleClick}
            >
              Learn more &rarr;
            </AnimatedButton>
          </div>
        </div>
        <div className="relative h-full">
          {images.map((image, idx) => (
            <motion.img
              key={idx}
              src={`/img_natours/${image.src}`}
              alt={`Photo ${idx + 1}`}
              className={`w-[55%] absolute shadow-sm ${image.positionCss} outline-offset-[10px]`}
              whileHover={{
                scale: 1.1,
                zIndex: 20,
                outline: ".5rem solid var(--primary-natour)",
                boxShadow: "0 10px 15px -3px rgba(0,0,0,0.2)",
                transition: { type: "spring" },
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Tours;
