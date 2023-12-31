import { motion } from 'framer-motion';
import { twJoin } from 'tailwind-merge';

function Heading({
  type,
  className,
  customizeSize = false,
  customizeColor = false,
  children,
  ...props
}) {
  if (type === 'h1')
    return (
      <motion.h1
        className={twJoin(
          !customizeSize ? 'md:text-3xl lg:text-5xl font-bold' : '',
          !customizeColor ? 'text-gray-800' : '',
          className
        )}
        {...props}
      >
        {children}
      </motion.h1>
    );
  else if (type === 'h2')
    return (
      <motion.h2
        className={twJoin(
          !customizeSize ? 'md:text-2xl lg:text-3xl font-bold' : '',
          !customizeColor ? 'text-gray-800' : '',
          className
        )}
        {...props}
      >
        {children}
      </motion.h2>
    );
  else if (type === 'h3')
    return (
      <motion.h3
        className={twJoin(
          !customizeSize ? 'md:text-lg lg:text-xl font-bold' : '',
          !customizeColor ? 'text-gray-800' : '',
          className
        )}
        {...props}
      >
        {children}
      </motion.h3>
    );
  else if (type === 'sub-heading')
    return (
      <motion.span
        className={twJoin(
          'block uppercase',
          !customizeSize ? 'font-medium racking-wider' : '',
          !customizeColor ? 'text-orange-800' : '',
          className
        )}
        {...props}
      >
        {children}
      </motion.span>
    );

  return (
    <motion.h4 className={twJoin(className)} {...props}>
      {children}
    </motion.h4>
  );
}

export default Heading;
