import { motion } from 'framer-motion';
import { twJoin } from 'tailwind-merge';

function Card({
  customizeCard = false,
  className = {},
  onClick,
  children,
  ...props
}) {
  const card_classes = twJoin([
    'flex flex-col items-center',
    customizeCard ? '' : 'gap-3 rounded-lg shadow-lg overflow-hidden',
    className,
  ]);
  return (
    <motion.div className={card_classes} onClick={onClick} {...props}>
      {children}
    </motion.div>
  );
}

export default Card;
