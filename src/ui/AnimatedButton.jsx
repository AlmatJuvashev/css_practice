import { twJoin } from "tailwind-merge";
import { motion, useAnimationControls } from "framer-motion";
const ButtonType = {
  omniFood:
    "bg-orange-700 hover:bg-orange-800 hover:transition-all text-stone-100",
  outlineOmnifood:
    "bg-orange-50/75 hover:bg-orange-100 hover:ring hover:ring-inset hover:ring-orange-200 text-stone-700 font-semibold hover:transition-all",
  outlineNatour:
    "bg-gray-200 hover:bg-green-100 hover:ring hover:ring-inset hover:ring-green-200 text-gray-700 font-semibold hover:transition-all text-left",
  navlink: "bg-orange-100 text-stone-700 font-bold",
  custom: "",
};

const ButtonSize = {
  sm: "text-sm py-1 px-2 rounded-sm",
  md: "text-lg py-3 px-6 rounded-md",
  lg: "text-xl py-3 px-6 rounded-md",
  custom: "",
};

function AnimatedButton({
  type = "omniFood",
  size = "lg",
  className,
  onClick,
  children,
  ...props
}) {
  // This can be improved. I’m keeping it simple here by joining two strings.
  const classNames = twJoin(ButtonType[type], ButtonSize[size], className);
  const controls = useAnimationControls();

  const hoverEffect = {
    y: -10,
    boxShadow: "0 35px 60px -15px rgba(0, 0, 0, 0.2)",
    transition: { type: "spring", delay: 0.1 },
  };

  function handleClick() {
    controls.start({
      y: 0,
      boxShadow: "0 5px 10px -10px rgb(0,0,0,0.2)",
      transition: { type: "spring" },
    });

    onClick();
  }

  return (
    <motion.button
      className={classNames}
      onClick={handleClick}
      animate={controls}
      whileHover={hoverEffect}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export default AnimatedButton;
