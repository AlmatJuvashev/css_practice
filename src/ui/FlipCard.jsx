import { createContext, useContext, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { twJoin } from 'tailwind-merge';
// Create context

const FlipCardContext = createContext();

// Create parent component

function FlipCard({ className, children }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const cardAnimationControls = useAnimation();

  // function handleFlip() {
  //   if (!isAnimating) {
  //     setIsAnimating(true);
  //     setIsFlipped(!isFlipped);
  //   }
  // }

  // function handleHover() {
  //   if (!isAnimating) {
  //     setIsAnimating(true);
  //     setIsFlipped(!isFlipped);
  //   }
  // }

  return (
    <FlipCardContext.Provider
      value={{
        isFlipped,
        isAnimating,
        setIsAnimating,
        setIsFlipped,
        cardAnimationControls,
      }}
    >
      <div
        className={twJoin(['[perspective:1000px]', className])}
        // onClick={handleFlip}
        // onMouseEnter={handleFlip}
        // onMouseLeave={handleFlip}
      >
        {children}
      </div>
    </FlipCardContext.Provider>
  );
}

// Create children

function InnerCard({ id, className, children }) {
  const {
    setIsAnimating,
    // isAnimating,
    // isFlipped,
    // setIsFlipped,
    cardAnimationControls,
  } = useContext(FlipCardContext);
  return (
    <motion.div
      key={id}
      animate={cardAnimationControls}
      className={twJoin([
        '[transform-style:preserve-3d] w-full h-full',
        className,
      ])}
      initial={false}
      // animate={{ rotateY: isFlipped ? 180 : 360 }}
      // transition={{
      //   duration: 0.4,
      //   animationDirection: 'normal',
      //   // type: 'spring',
      // }}
      onHoverStart={() => {
        cardAnimationControls.start({
          rotateY: 180,
          transition: { duration: 0.6, animationDirection: 'normal' },
        });
        // if (!isAnimating) {
        //   setIsAnimating(true);

        //   // setIsFlipped(!isFlipped);
        // }
      }}
      onHoverEnd={() => {
        cardAnimationControls.start({
          rotateY: 360,
          transition: { duration: 0.6, animationDirection: 'normal' },
        });
        // if (!isAnimating) {
        //   setIsAnimating(true);

        // }
      }}
      onAnimationComplete={() => setIsAnimating(false)}
    >
      {children}
    </motion.div>
  );
}

function FrontCard({ className, children }) {
  return (
    <div
      className={twJoin([
        'absolute inset-0 h-full w-full [backface-visibility:hidden]',
        className,
      ])}
    >
      {children}
    </div>
  );
}

function BackCard({ className, children }) {
  return (
    <div
      className={twJoin([
        'absolute inset-0 h-full w-full [transform:rotateY(180deg)] [backface-visibility:hidden]',
        className,
      ])}
    >
      {children}
    </div>
  );
}

FlipCard.InnerCard = InnerCard;
FlipCard.FrontCard = FrontCard;
FlipCard.BackCard = BackCard;

export default FlipCard;
