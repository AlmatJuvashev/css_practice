import { twJoin } from 'tailwind-merge';

const ButtonType = {
  omniFood:
    'bg-orange-700 hover:bg-orange-800 hover:transition-all text-stone-100',
  outlineOmnifood:
    'bg-orange-50/75 hover:bg-orange-100 hover:ring hover:ring-inset hover:ring-orange-200 text-stone-700 font-semibold hover:transition-all',
  navlink: 'bg-orange-100 text-stone-700 font-bold',
  custom: '',
};

const ButtonSize = {
  sm: 'text-sm py-1 px-2 rounded-sm',
  md: 'text-lg py-3 px-6 rounded-md',
  lg: 'text-xl py-3 px-6 rounded-md',
  custom: '',
};

function Button({
  type = 'omniFood',
  size = 'lg',
  className,
  onClick,
  children,
}) {
  // This can be improved. I’m keeping it simple here by joining two strings.
  const classNames = twJoin(ButtonType[type], ButtonSize[size], className);

  return (
    <button className={classNames} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
